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
   
           // Wait for Spline to construct the scene graph
           setTimeout(() => {
               const realScene = app.scene || app._scene;
               const realRenderer = app.renderer || app._renderer;
   
               if (realScene) {
                   // 1. Fix Background Transparency
                   if (realRenderer) realRenderer.setClearColor(0x000000, 0);
   
                   // 2. Identify Objects
                   let meshes = [];
                   realScene.traverse((obj) => {
                       if (obj.isMesh) {
                           // Calculate bounding sphere if missing
                           if (obj.geometry && !obj.geometry.boundingSphere) {
                               obj.geometry.computeBoundingSphere();
                           }
                           
                           let size = 0;
                           if(obj.geometry && obj.geometry.boundingSphere) {
                               const scale = Math.max(obj.scale.x, obj.scale.y, obj.scale.z);
                               size = obj.geometry.boundingSphere.radius * scale;
                           }
                           meshes.push({ obj, size });
                       }
                   });
   
                   // 3. Sort by size (Largest = Earth)
                   meshes.sort((a, b) => b.size - a.size);
   
                   // 4. DESTROY SMALL OBJECTS
                   if (meshes.length > 0) {
                       const earthSize = meshes[0].size;
                       
                       for (let i = 1; i < meshes.length; i++) {
                           const item = meshes[i];
                           
                           // If it's smaller than 80% of the Earth, KILL IT.
                           if (item.size < (earthSize * 0.8)) {
                               const mesh = item.obj;
   
                               // A. Remove from Scene
                               if (mesh.parent) mesh.parent.remove(mesh);
   
                               // B. Dispose Geometry (Frees VRAM)
                               if (mesh.geometry) mesh.geometry.dispose();
   
                               // C. Dispose Material (Frees VRAM)
                               if (mesh.material) {
                                   if (Array.isArray(mesh.material)) {
                                       mesh.material.forEach(m => m.dispose());
                                   } else {
                                       mesh.material.dispose();
                                   }
                               }
                           }
                       }
                   }
               }
   
               // 5. Fade In
               canvas.style.opacity = '1';
   
           }, 500); // Shorter timeout for faster response
       });
   } else {
       console.error("DATA ERROR: 'sceneData' failed to import.");
   }