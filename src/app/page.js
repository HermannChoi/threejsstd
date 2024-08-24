"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import styles from "./page.module.css";
import * as THREE from "three";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
  SpotLight,
  Text,
} from "@react-three/drei";
import { useRef } from "react";

// Mesh 컴포넌트를 별도로 정의
function RotatingMesh() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      // meshRef.current.rotation.z += 0.01;
    }
  });

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const materials =
    // [
    // new THREE.MeshBasicMaterial({ color: "#202020" }), // 앞면
    // new THREE.MeshBasicMaterial({ color: "#202020" }), // 뒷면
    // new THREE.MeshBasicMaterial({ color: "#505050" }), // 위쪽
    // new THREE.MeshBasicMaterial({ color: "#505050" }), // 아래쪽
    // new THREE.MeshBasicMaterial({ color: "#808080" }), // 오른쪽
    new THREE.MeshBasicMaterial({ color: "#808080" }); // 왼쪽
  // ];

  return (
    <>
      <SpotLight
        color="white"
        intensity={0.8}
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={0.1}
        castShadow
      />
      <mesh ref={meshRef} geometry={geometry} material={materials}></mesh>
    </>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Threejs Study</h1>
      <section id="canvas_container" className={styles.canvas_container}>
        <Canvas>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI * 2} />
          {/* <ambientLight intensity={Math.PI / 5} /> */}
          {/* <directionalLight color="red" intensity={2} position={[-5, 5, 5]} /> */}

          <group scale={3} position={[0, 0, 0]}>
            <RotatingMesh /> {/* RotatingMesh 컴포넌트를 호출 */}
          </group>
          {/* <Environment background preset="forest" blur={1} /> */}
          <PerspectiveCamera makeDefault position={[10, 7, 0]} />
        </Canvas>
      </section>
    </main>
  );
}
