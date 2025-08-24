import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";
import { Text } from "@react-three/drei";
import type { Vector3 } from "@react-three/fiber";

export const PreviewPushButton = () => {
  const { length, push } = useContext(LinkedListContext)!;

  const position =
    length === 0
      ? ([0, 0, 0] as Vector3)
      : ([length * 3 - (length - 1) * 1.5, 0, 0] as Vector3);

  return (
    <group position={position}>
      <mesh onClick={() => push(length + 1)}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#67C090" />
      </mesh>
      <Text
        position={[0, 0, 0.5]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        push
      </Text>
    </group>
  );
};
