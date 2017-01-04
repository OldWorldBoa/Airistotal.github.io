// Global player variables
var x = 0;
var y = 0;
var left = false;
var right = false;
var up = false;
var down = false;

// Initialize scene
var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera( 
	document.body.clientWidth / - 2,	// left
	document.body.clientWidth / 2, 		// right
	document.body.clientHeight / 2, 	// top
	document.body.clientHeight / - 2, 	// bottom
	1, 				// near
	1000 			// far
);

scene.add( camera );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( document.body.clientWidth, document.body.clientHeight );
document.body.appendChild( renderer.domElement );

// make player !!! Counter-clockwise winding for faces !!!
var player = new THREE.Geometry();

var v0 = new THREE.Vector3(x+0, y+0, 2);
var v1 = new THREE.Vector3(x+40, y+0, 2);
var v2 = new THREE.Vector3(x+40, y+40, 2);
var v3 = new THREE.Vector3(x+0, y+40, 2);

player.vertices.push(v0);
player.vertices.push(v1);
player.vertices.push(v2);
player.vertices.push(v3);

player.faces.push(new THREE.Face3(0, 1, 2));
player.faces.push(new THREE.Face3(0, 2, 3));
player.computeFaceNormals();

var mesh = new THREE.Mesh(player, new THREE.MeshNormalMaterial());
mesh.geometry.dynamic = true;
scene.add(mesh);

camera.position.z = 50;

// Draw scene
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );

	update_player();
};

function update_player() {
	var len = mesh.geometry.vertices.length;

	if(left) {
		mesh.geometry.verticesNeedUpdate = true;

		for(var i = 0; i < len; i++) {
			console.log(mesh.geometry.vertices[i]);
			console.log(i, len);

			if(mesh.geometry.vertices[i]) {
				mesh.geometry.vertices[i].x--;
			}
		}
	}

	if(right) {
		mesh.geometry.verticesNeedUpdate = true;
		
		for(var i = 0; i < len; i++) {
			if(mesh.geometry.vertices[i]) {
				mesh.geometry.vertices[i].x++;
			}
		}
	}

	if(up) {
		mesh.geometry.verticesNeedUpdate = true;
		
		for(var i = 0; i < len; i++) {
			if(mesh.geometry.vertices[i]) {
				mesh.geometry.vertices[i].y++;
			}
		}
	}

	if(down) {
		mesh.geometry.verticesNeedUpdate = true;
		
		for(var i = 0; i < len; i++) {
			if(mesh.geometry.vertices[i]) {
				mesh.geometry.vertices[i].y--;
			}
		}
	}
};

render();