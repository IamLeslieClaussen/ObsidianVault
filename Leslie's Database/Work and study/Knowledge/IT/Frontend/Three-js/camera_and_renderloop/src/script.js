import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red", wireframe: true})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

const cubeMesh1 = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

const cubeMesh2 = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

const group = new THREE.Group()
group.add(cubeMesh)
group.add(cubeMesh1)
group.add(cubeMesh2)

scene.add(group)

cubeMesh.position.y = 1
cubeMesh.position.z = -1
cubeMesh2.position.y = 4
cubeMesh.position.z = 2


const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)


//initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  30)
camera.position.z = 5

const aspectRatio = window.innerWidth / window.innerHeight


// const camera = new THREE.OrthographicCamera(
// -1 * aspectRatio, 1 * aspectRatio,
//   1, -1,
//   0.1, 200
// )
// camera.position.z = 5 


// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
const maxPixelRatio = Math.min(window.devicePixelRatio, 2)
renderer.setPixelRatio(maxPixelRatio)

//instantiate the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true



window.addEventListener('resize', () => {
  // update camera
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  
})

const renderloop = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}

renderloop()




