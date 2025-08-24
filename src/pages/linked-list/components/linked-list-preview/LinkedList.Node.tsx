import type { Vector3 } from "@react-three/fiber";
import type { LinkedListNodeType } from "../../types/linkedListTypes";

type LinkedListNodeProps = {
  value: LinkedListNodeType<number>["value"];
  position: Vector3;
};

export const LinkedListNode = ({ value, position }: LinkedListNodeProps) => {
  console.log(value);
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
