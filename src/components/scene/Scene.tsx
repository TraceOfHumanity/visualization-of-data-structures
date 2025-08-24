import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[4, 5, 5]} intensity={100} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
};
