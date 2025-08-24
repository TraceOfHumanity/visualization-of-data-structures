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
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};
