// Initialize scene
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
//var fog = new THREE.Fog(new THREE.Color(0xb5afa8), 5.0, 1000);
var fog = new THREE.FogExp2(0xefd1b5, 0.0025);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add camera
scene.add(camera);
camera.position.z = 5;

// Add controls
controls.enabled = true;
controls.update();

// Add fog
scene.fog = fog;

// Add raycasting from mouse
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

// Load models
var loader = new THREE.FBXLoader();
loader.load('../res/card.fbx', function (object) {
    var material = new THREE.MeshNormalMaterial();

    object.children[0].material = material

    scene.add(object);
});


loader.load('../res/floor.fbx', function (object) {
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    object.children[0].material = material

    scene.add(object);
});

// Draw scene
var gl = renderer.domElement.getContext('experimental-webgl');
var render = function () {
    requestAnimationFrame(render);

    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);

    for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }

    controls.update();
    renderer.render(scene, camera);
    gl.clearColor(181/255, 175/255, 168/255, 1.0);
    gl.clear(gl.COLOR_BUFUR_BIT);
};

render();

window.addEventListener('mousemove', onMouseMove, false);
window.requestAnimationFrame(render);