import type { Vector3 } from "@react-three/fiber";
import type { LinkedListNodeType } from "../../types/linkedListTypes";
import { Text } from "@react-three/drei";

type LinkedListNodeProps = {
  value: LinkedListNodeType<number>["value"];
  position: Vector3;
};

export const PreviewNode = ({ value, position }: LinkedListNodeProps) => {
  console.log(value);
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <Text
        position={[0, 0, 1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        value: {value.toString().padEnd(1, "...")}
      </Text>
    </group>
  );
};
