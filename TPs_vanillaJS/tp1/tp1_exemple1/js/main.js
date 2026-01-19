let canvas;
let engine;
let scene;
let camera;

window.onload = startGame;

function startGame() {
    canvas = document.querySelector("#myCanvas");
    engine = new BABYLON.Engine(canvas, true);

    scene = createScene();

    //let sphere = scene.getMeshByName("mySphere");

    // main animation loop 60 times/s
    engine.runRenderLoop((time) => {
        scene.render();
    });
}

function createScene() {
    let scene = new BABYLON.Scene(engine);
    
    // background
    scene.clearColor = new BABYLON.Color3(1, 1, 1);
    
    // Create some objects 
    // params = number of horizontal "stripes", diameter...
    let sphere = BABYLON.MeshBuilder.CreateSphere("mySphere", {diameter: 2, segments: 32}, scene);
    sphere.position.y = 1;
    sphere.position.x = -5;

    let sphere2 = BABYLON.MeshBuilder.CreateSphere("mySphere", {diameter: 2, segments: 32}, scene);
    sphere2.position.y = 1;
    sphere2.position.x = 0;

    let sphere3 = BABYLON.MeshBuilder.CreateSphere("mySphere", {diameter: 2, segments: 32}, scene);
    sphere3.position.y = 1;
    sphere3.position.x = 5;

    let cylinder = BABYLON.MeshBuilder.CreateCylinder("mySphere", {diameter: 2, segments: 32}, scene);
    cylinder.position.y = 1;
    cylinder.position.x = 10;

    let box = BABYLON.MeshBuilder.CreateBox("mySphere", {diameter: 2, segments: 32}, scene);
    box.position.y = 1;
    box.position.x = -10;

    // a plane
    let ground = BABYLON.MeshBuilder.CreateGround("myGround", {width: 60, height: 60}, scene);
    //console.log(ground.name);

     camera = new BABYLON.FreeCamera("myCamera", new BABYLON.Vector3(0, 30, 0), scene);
   // This targets the camera to scene origin
   camera.setTarget(BABYLON.Vector3.Zero());
   
   //camera.rotation.y = 0.3;
   camera.attachControl(canvas);
   
    let light = new BABYLON.HemisphericLight("myLight", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.3;
    // color of the light
    light.diffuse = new BABYLON.Color3(1, 1, 1);

    // Add a red point light above and to the left
    let pointLight1 = new BABYLON.PointLight("pointLight1", new BABYLON.Vector3(-10, 10, -10), scene);
    pointLight1.diffuse = new BABYLON.Color3(1, 0, 0); // Red
    pointLight1.intensity = 0.5;

    // Add a blue point light above and to the right
    let pointLight2 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(10, 10, 10), scene);
    pointLight2.diffuse = new BABYLON.Color3(0, 0, 1); // Blue
    pointLight2.intensity = 0.5;

    return scene;
}

window.addEventListener("resize", () => {
    engine.resize()
})
