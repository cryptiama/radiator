/* =========================================
   IMPORTS
   ========================================= */
   import { Application } from 'https://unpkg.com/@splinetool/runtime@1.9.37/build/runtime.js';

   // !IMPORTANT! : Make sure this filename matches exactly what is in your folder.
   // You had 'xxspline-data.js' and 'xspline-data.js' in previous files. Check it.
   import { sceneData } from './xspline-data.js'; 
   
   /* =========================================
      1. UI LOGIC (Menus & Buttons)
      ========================================= */
   document.addEventListener('DOMContentLoaded', () => {
       // Skating Line Logic
       const nav = document.querySelector('.main-nav');
       const line = document.querySelector('.slide-line');
       if (nav && line) {
           const links = nav.querySelectorAll('a');
           const moveLine = (target) => {
               const navRect = nav.getBoundingClientRect();
               const linkRect = target.getBoundingClientRect();
               
               if (parseFloat(line.style.width || 0) === 0) {
                   line.style.transition = 'none';
                   line.style.left = (linkRect.left - navRect.left + linkRect.width/2) + 'px';
                   line.style.width = '0px';
                   line.style.opacity = '1';
                   line.offsetHeight; // Trigger reflow
                   line.style.transition = 'left 0.9s cubic-bezier(0.25, 1, 0.5, 1), width 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s ease';
               }
               line.style.left = (linkRect.left - navRect.left) + 'px';
               line.style.width = linkRect.width + 'px';
           };
           links.forEach(l => l.addEventListener('mouseenter', (e) => moveLine(e.target)));
           nav.addEventListener('mouseleave', () => { line.style.opacity = '0'; line.style.width = '0'; });
       }
   
       // Mobile Menu
       const mobileBtn = document.querySelector('.mobile-menu-btn');
       const navMenu = document.querySelector('.main-nav');
       if (mobileBtn) {
           mobileBtn.addEventListener('click', () => {
               navMenu.classList.toggle('open');
               const icon = mobileBtn.querySelector('i');
               navMenu.classList.contains('open') 
                   ? (icon.classList.remove('fa-bars'), icon.classList.add('fa-xmark'))
                   : (icon.classList.add('fa-bars'), icon.classList.remove('fa-xmark'));
           });
       }
   });
   
   /* =========================================
      2. HIGH-PERFORMANCE 3D ENGINE
      ========================================= */
   
   const canvas = document.getElementById('canvas3d');
   const app = new Application(canvas);
   
   // --- PERFORMANCE FIX 1: CLAMP PIXEL RATIO ---
   // Prevents 4K rendering on Retina screens. Drastically reduces GPU heat.
   // Spline defaults to window.devicePixelRatio (which is 2 or 3 on Macs). We force 1.
   try {
       const renderer = app.renderer || app._renderer;
       if(renderer) renderer.setPixelRatio(1);
   } catch(e) {}
   
   
   // --- PERFORMANCE FIX 2: INTERSECTION OBSERVER ---
   // Instead of listening to every scroll pixel, we ask the browser:
   // "Is the Hero Section on screen?"
   const heroSection = document.querySelector('.hero-section');
   
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // --- ON SCREEN ---
               canvas.style.display = 'block';
               try { app.play(); } catch(e){}
           } else {
               // --- OFF SCREEN ---
               // 1. Stop Calculation Loop
               try { app.stop(); } catch(e){}
               // 2. Hide Canvas (Removes from GPU Rasterizer)
               canvas.style.display = 'none'; 
           }
       });
   }, {
       root: null,
       threshold: 0 // Trigger as soon as 1 pixel leaves/enters
   });
   
   // Start observing
   if (heroSection) observer.observe(heroSection);
   
   
   /* =========================================
   3. SCENE LOADING & NUCLEAR CLEANUP
   ========================================= */
if (sceneData) {
    app.start(sceneData).then(() => {
        console.log("3D Loaded. Executing Optimization...");

        setTimeout(() => {
            try {
                const realScene = app.scene || app._scene;
                const realRenderer = app.renderer || app._renderer;

                if (realScene) {
                    // 1. Fix Background Transparency
                    if (realRenderer) realRenderer.setClearColor(0x000000, 0);

                    // 2. Identify Objects
                    let meshes = [];
                    realScene.traverse((obj) => {
                        if (obj.isMesh) {
                            if (obj.geometry && !obj.geometry.boundingSphere) {
                                obj.geometry.computeBoundingSphere();
                            }
                            let size = 0;
                            if (obj.geometry && obj.geometry.boundingSphere) {
                                const scale = Math.max(obj.scale.x, obj.scale.y, obj.scale.z);
                                size = obj.geometry.boundingSphere.radius * scale;
                            }
                            meshes.push({ obj, size });
                        }
                    });

                    // 3. Sort by size (Largest = Earth)
                    meshes.sort((a, b) => b.size - a.size);

                    // 4. NUKE EVERYTHING EXCEPT THE EARTH
                    // This guarantees the "Black Thing" (index 1, 2, etc.) is destroyed.
                    if (meshes.length > 0) {
                        
                        // A. KILL ALL OTHER OBJECTS FIRST (Index 1 to end)
                        for (let i = 1; i < meshes.length; i++) {
                            const item = meshes[i];
                            const mesh = item.obj;
                            if (mesh.parent) mesh.parent.remove(mesh);
                            if (mesh.geometry) mesh.geometry.dispose();
                            if (mesh.material) {
                                if (Array.isArray(mesh.material)) mesh.material.forEach(m => m.dispose());
                                else mesh.material.dispose();
                            }
                        }

                        // B. ROTATE THE SURVIVOR (Index 0 - The Earth)
                        // We use geometry rotation because texture sliding was clamped.
                        const earthMesh = meshes[0].obj;
                        
                        const safeRotate = (mesh, angle) => {
                            if (!mesh.geometry) return;

                            // 1. Calculate Center
                            mesh.geometry.computeBoundingBox();
                            const box = mesh.geometry.boundingBox;
                            const Vector3 = mesh.position.constructor;
                            const center = new Vector3();
                            center.x = (box.max.x + box.min.x) / 2;
                            center.y = (box.max.y + box.min.y) / 2;
                            center.z = (box.max.z + box.min.z) / 2;

                            // 2. Move to Origin -> Rotate -> Move Back
                            // This ensures it spins in place and doesn't fly away.
                            mesh.geometry.translate(-center.x, -center.y, -center.z);
                            
                            // CHANGE THIS NUMBER to find China.
                            // 3.5 is roughly 200 degrees rotation from USA.
                            mesh.geometry.rotateY(0.6); 
                            
                            mesh.geometry.translate(center.x, center.y, center.z);
                        };

                        safeRotate(earthMesh, 3.5);
                    }
                }
            } catch (err) {
                console.error("Optimization Warning:", err);
            }

            // 5. Fade In
            canvas.style.opacity = '1';

        }, 500);
    });
} else {
    console.error("DATA ERROR: 'sceneData' failed to import.");
}