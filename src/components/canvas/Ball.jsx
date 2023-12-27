import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// In summary, this code defines a React component (Ball) that represents a 3D ball with a floating and rotating effect, lit by ambient and directional lights, and featuring a decal with a loaded texture. The scene is constructed using the Three.js library with the help of @react-three/fiber and @react-three/drei for React integration and additional utilities. The texture is loaded using the useTexture hook, and the entire component is intended for use in a Three.js canvas within a React application.
const Ball = (props) => {
  //Using the useTexture hook to load a texture(image) specified by the props.imgUrl property.
  const [decal] = useTexture([props.imgUrl]);

  return (
    // The <Float> component is adding floating effects to its child components.
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* The ball is lit by an ambient light and a directional light. */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* The ball itself is created using a Three.js mesh(mesh is a regular Three.js element) with an icosahedron geometry and a standard material. */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Using <Decal> component to apply the loaded texture(decal) to the mesh. */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// In summary, this component sets up a Three.js canvas using the @react-three/fiber library, includes user interaction with orbit controls from @react-three/drei, and renders a 3D scene with a ball component (<Ball>) that loads a texture specified by the icon prop. The loading process is handled by <Suspense>, and assets are preloaded using <Preload>.
const BallCanvas = ({ icon }) => {
  return (
    // Canvas component is used to create/render a 3D scene.
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Using the <Suspense> component to handle the asynchronous loading, with a fallback loader (<CanvasLoader />) displayed during the loading process. */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Integrating the <OrbitControls> component to allow user interaction for orbiting around the 3D scene. Zooming is disabled (enableZoom={false}). */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Using the <Preload> component to preload all assets. This ensures that 3D models and textures are ready to render when needed. */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
