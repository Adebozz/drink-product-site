// src/components/ThreeScene.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import assets from "../assets/assets";

const RotatingBottle = () => {
  const bottleRef = useRef();
  const texture = useTexture(assets.drink);

  useFrame(() => {
    bottleRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={bottleRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1, 4, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: "100vh", background: "#ffdf00" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingBottle />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
