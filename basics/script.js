const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 'red' });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sceneSize = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sceneSize.width / sceneSize.height);
camera.position.z = 2;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sceneSize.width, sceneSize.height);

renderer.render(scene, camera);