/* =========================================
   IMPORTS
   ========================================= */
   import { Application } from 'https://unpkg.com/@splinetool/runtime@1.9.37/build/runtime.js';

   
// --- DEVELOPMENT MODE: 3D DISABLED ---
// 1. We comment out the import so it doesn't look for the file.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { sceneData } from './xspline-data.js'; 

// 2. We create a fake variable so the rest of the script doesn't crash.
// const sceneData = null; 
//    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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

// WE ONLY RUN 3D LOGIC IF THE CANVAS EXISTS (Prevents crash on Equipment Page)
if (canvas) {
    const app = new Application(canvas);

    // --- PERFORMANCE FIX 1: CLAMP PIXEL RATIO ---
    try {
        const renderer = app.renderer || app._renderer;
        if(renderer) renderer.setPixelRatio(1);
    } catch(e) {}

    // --- PERFORMANCE FIX 2: INTERSECTION OBSERVER ---
    const heroSection = document.querySelector('.hero-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                canvas.style.display = 'block';
                try { app.play(); } catch(e){}
            } else {
                try { app.stop(); } catch(e){}
                canvas.style.display = 'none'; 
            }
        });
    }, { root: null, threshold: 0 });
    
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
                        if (meshes.length > 0) {
                            // A. KILL ALL OTHER OBJECTS FIRST
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

                            // B. ROTATE THE SURVIVOR
                            const earthMesh = meshes[0].obj;
                            const safeRotate = (mesh, angle) => {
                                if (!mesh.geometry) return;
                                mesh.geometry.computeBoundingBox();
                                const box = mesh.geometry.boundingBox;
                                const Vector3 = mesh.position.constructor;
                                const center = new Vector3();
                                center.x = (box.max.x + box.min.x) / 2;
                                center.y = (box.max.y + box.min.y) / 2;
                                center.z = (box.max.z + box.min.z) / 2;

                                mesh.geometry.translate(-center.x, -center.y, -center.z);
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
    }
} // <--- END OF "IF CANVAS" CHECK

/* =========================================
   ACTIVE LINK LOGIC (FIXED)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // 1. Get current filename (e.g., 'about-us.html')
    // If we are at the root domain, default to 'index.html'
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();
    if (currentPage === "" || currentPage === "/") currentPage = "index.html";

    navLinks.forEach(link => {
        // 2. Get the href attribute from the link
        const linkHref = link.getAttribute('href');
        if (!linkHref || linkHref === "#") return;

        // 3. Get the filename from the href (e.g., 'about-us.html')
        const linkPage = linkHref.split("/").pop().toLowerCase();

        // 4. Compare and add class
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
/* =========================================
   FOOTER SOFT MAGNET (TRIGGER ON EMAIL)
   ========================================= */
let lastScrollY = window.scrollY;
let magnetLocked = false;

// [CONTROL] DURATION (Higher = Slower)
const SCROLL_DURATION = 500; 

function smoothScrollToBottom(duration) {
    const start = window.scrollY;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);
        
        // Ease In-Out
        let ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + (distance * ease));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

window.addEventListener('scroll', () => {
     return; // <--- ADD THIS LINE/
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // 1. Target the specific email paragraph using the envelope icon
    const emailIcon = document.querySelector('.fa-envelope');
    const triggerElement = emailIcon ? emailIcon.closest('p') : null;
    
    if (!triggerElement) return;

    const currentScrollY = window.scrollY;
    const rect = triggerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 2. Detect Downward Scroll
    if (currentScrollY > lastScrollY) {
        
        // 3. Trigger ONLY when the email element enters the viewport (is visible)
        if (rect.top < windowHeight && !magnetLocked) {
            magnetLocked = true;
            smoothScrollToBottom(SCROLL_DURATION);
        }
    } else {
        // 4. Reset lock only if email goes back below the screen (user scrolled up away from it)
        if (rect.top > windowHeight) {
            magnetLocked = false;
        }
    }

    lastScrollY = currentScrollY;
}, { passive: true });





 