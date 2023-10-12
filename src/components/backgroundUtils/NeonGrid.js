import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const NeonGrid = () => {
  const planeRef = useRef();

  useFrame(() => {
    if (planeRef.current && planeRef.current.material instanceof THREE.MeshBasicMaterial) {
      planeRef.current.material.emissive.set(0xff00ff);
    }
  });

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial emissive={0xff00ff} color={0xffffff} />
    </mesh>
  );
};

export default () => (
  <Canvas>
    <NeonGrid />
  </Canvas>
);