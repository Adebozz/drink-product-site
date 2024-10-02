// src/components/ThreeScene.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const RotatingBottle = ({ texturePath }) => {
  const bottleRef = useRef();
  const texture = useTexture(texturePath);

  useFrame(() => {
    bottleRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={bottleRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1, 4, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeScene = ({ texturePath }) => {
  return (
    <Canvas style={{ height: "500px", background: "#ffdf00" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingBottle texturePath={texturePath} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeScene;
