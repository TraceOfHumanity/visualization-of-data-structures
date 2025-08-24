import { Scene } from "@/components/scene/Scene";
import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect } from "react";
import { LinkedListContext } from "../context/LinkedListContext";

export const LinkedListPreview = () => {
  const { push, length } = useContext(LinkedListContext)!;

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      push(i);
    }
    console.log(length);
  }, [push, length]);

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
