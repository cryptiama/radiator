(function initFooterOcean() {
    const container = document.getElementById('footer_wave');
    // Check if container exists AND Three.js is loaded
    if (!container || !window.THREE) {
        console.warn("Ocean Footer: Container or THREE.js missing");
        return;
    }

    // =========================
    // MANUAL TUNING CONTROLS
    // =========================
    const VIEW = {
        FOV: 60,
        CAM_X: 0,
        CAM_Y: 210,
        CAM_Z: 520,
        LOOK_X: 0,
        LOOK_Y: 0,
        LOOK_Z: 0,
        MOUSE_X: 90,
        MOUSE_Y: 45
    };

    const GRID = {
        SEPARATION: 35,
        AMOUNT_X: 170,
        AMOUNT_Y: 42
    };

    const DOTS = {
        SIZE: 5.5,
        OPACITY: 1
    };

    const WAVE = {
        AMP_X: 18,
        AMP_Y: 22,
        FREQ_X: 0.26,
        FREQ_Y: 0.34,
        SPEED: 0.06
    };

    // =========================
    // THREE SETUP
    // =========================
    let camera, scene, renderer, points;
    let count = 0;

    const mouse = { nx: 0, ny: 0 }; 

    function sizeToContainer() {
        const rect = container.getBoundingClientRect();
        // Prevent 0 height/width errors
        const w = Math.max(1, Math.floor(rect.width));
        const h = Math.max(1, Math.floor(rect.height));

        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setSize(w, h, false);

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    }

    camera = new THREE.PerspectiveCamera(VIEW.FOV, 1, 1, 20000);
    camera.position.set(VIEW.CAM_X, VIEW.CAM_Y, VIEW.CAM_Z);

    scene = new THREE.Scene();

    const num = GRID.AMOUNT_X * GRID.AMOUNT_Y;
    const positions = new Float32Array(num * 3);

    let i = 0;
    for (let ix = 0; ix < GRID.AMOUNT_X; ix++) {
        for (let iy = 0; iy < GRID.AMOUNT_Y; iy++) {
            positions[i]     = ix * GRID.SEPARATION - ((GRID.AMOUNT_X * GRID.SEPARATION) / 2);
            positions[i + 1] = 0;
            positions[i + 2] = iy * GRID.SEPARATION - ((GRID.AMOUNT_Y * GRID.SEPARATION) / 2);
            i += 3;
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: DOTS.SIZE,
        opacity: DOTS.OPACITY,
        transparent: true,
        depthWrite: false
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearAlpha(0); 
    container.appendChild(renderer.domElement);

    sizeToContainer();
    window.addEventListener('resize', sizeToContainer);

    container.addEventListener('pointermove', (e) => {
        const r = container.getBoundingClientRect();
        const x = (e.clientX - r.left) / Math.max(1, r.width);
        const y = (e.clientY - r.top)  / Math.max(1, r.height);
        mouse.nx = (x * 2) - 1;     
        mouse.ny = -((y * 2) - 1);  
    });

    function animate() {
        requestAnimationFrame(animate);

        camera.fov = VIEW.FOV;
        camera.position.x = VIEW.CAM_X + mouse.nx * VIEW.MOUSE_X;
        camera.position.y = VIEW.CAM_Y + mouse.ny * VIEW.MOUSE_Y;
        camera.position.z = VIEW.CAM_Z;
        camera.lookAt(VIEW.LOOK_X, VIEW.LOOK_Y, VIEW.LOOK_Z);

        const pos = points.geometry.attributes.position.array;
        let p = 0;
        for (let ix = 0; ix < GRID.AMOUNT_X; ix++) {
            for (let iy = 0; iy < GRID.AMOUNT_Y; iy++) {
                pos[p + 1] =
                    Math.sin((ix + count) * WAVE.FREQ_X) * WAVE.AMP_X +
                    Math.sin((iy + count) * WAVE.FREQ_Y) * WAVE.AMP_Y;
                p += 3;
            }
        }
        points.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
        count += WAVE.SPEED; 
    }

    animate();
})();