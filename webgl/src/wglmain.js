// Initialize scene
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add( camera );

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;


var loader = new THREE.FBXLoader();
loader.load('../res/card.fbx', function (object) {
    console.log(Json.stringify(object));

    object.mixer = new THREE.AnimationMixer(object);
    mixers.push(object.mixer);
    var action = object.mixer.clipAction(object.animations[0]);
    action.play();
    object.traverse(function (child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    scene.add(object);
});

// Draw scene
var render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;

    renderer.render(scene, camera);
};

render();