import { Scene } from "@/components/scene/Scene";
import { OrbitControls } from "@react-three/drei";

export const LinkedListPreview = () => {
  return (
    <Scene>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[4, 5, 5]} intensity={100} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </Scene>
  );
};
