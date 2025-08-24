import { useFrame, type Vector3 } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { LinkedListNodeType } from "../../types/linkedListTypes";

type LinkedListNodeProps = {
  value: LinkedListNodeType<number>["value"];
  position: Vector3;
};

export const PreviewNode = ({ value, position }: LinkedListNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useFrame(() => {
    if (groupRef.current && isAnimating) {
      const currentScale = groupRef.current.scale.x;
      if (currentScale < 1) {
        const newScale = Math.min(currentScale + 0.05, 1);
        groupRef.current.scale.setScalar(newScale);

        if (newScale >= 1) {
          setIsAnimating(false);
        }
      }
    }
  });

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(0);
    }
  }, []);

  return (
    <group position={position} ref={groupRef}>
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
