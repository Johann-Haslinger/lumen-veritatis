import React, { useEffect, useRef } from "react";
import { Box } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";

interface ScaledSceneProps {
  children: React.ReactNode;
}

const ScaledScene: React.FC<ScaledSceneProps> = (props) => {
  const sceneRef = useRef<THREE.Group>(null);
  const { size, viewport } = useThree();

  useEffect(() => {
    if (!sceneRef.current) return;

    const aspectX = size.width / viewport.width;
    const aspectY = size.height / viewport.height;

    sceneRef.current.scale.set(aspectX * 0.01, aspectY * 0.01, 1.0);
  }, [size, viewport]);

  return (
    <group ref={sceneRef}>
      {props.children}
      <Box position={[0, 0, -0.1]} args={[1, 1, 1]}>
        <meshBasicMaterial attach="material" color="#ffffff" />
      </Box>
    </group>
  );
};

interface FullScreenCanvasProps {
  children: React.ReactNode;
}

const FullScreenCanvas: React.FC<FullScreenCanvasProps> = (props) => {
  return (
    <Canvas
      style={{
        backgroundColor: "rgb(101,130,85)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
      <perspectiveCamera position={[0, 0, 5]} />
    </Canvas>
  );
};

export default FullScreenCanvas;
