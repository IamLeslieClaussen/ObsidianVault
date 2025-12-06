[[scene]]: The scene holds everything that can be viewable by the user. The container that holds all 3D objects, light and other elements. It containt everything, whether is viewable or not. even behind the [[camera]]

[[camera]]: Determines what is ultimately viewed by the user. This is refered to as the viewpoint into the scene. It defines what part of the scene you see and what perspective. 

[[object]]: This refers to any element that is added to the scene.

[[ Visual_objects]]:
Meshes (3D models with geometry + material)
Sprites
Lines
Points

[[Lighting]]:
DirectionalLight
PointLight
AmbientLight
SpotLight

[[Helpers_and_Controls]]:
AxisHelper
GridHelper
Camera helpers

[[organizational]]:
Groups (containers for multiple objects)
Empty Object3D (for positioning/grouping)

[[Mesh]]: The complete visible 3D object that combines both Material and Geometry and can be positioned, rotated and scaled in the scene.

```js
const camera = new THREE.PerspectiveCamera(
  75, 
  // vertical fiel of view
  window.innerWidth / window.innerHeight,
  0.1, // near_clipping_plane
  30)
camera.position.z = 5
```

[[near_clipping_plane]]: This defines the closest distance from the camera where the object will be rendered