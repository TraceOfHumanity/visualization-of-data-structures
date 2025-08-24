import { Scene } from "@/components/scene/Scene";
import { OrbitControls } from "@react-three/drei";
import { useContext } from "react";
import { LinkedListContext } from "../../context/LinkedListContext";
import { LinkedListNode } from "./LinkedList.Node";

export const LinkedListPreview = () => {
  const { length, head } = useContext(LinkedListContext)!;

  const getNodesArray = () => {
    const nodes: Array<{ value: any; position: [number, number, number] }> = [];
    let current = head;
    let index = 0;

    while (current) {
      const x = index * 3 - (length - 1) * 1.5;
      nodes.push({
        value: current.value,
        position: [x, 0, 0],
      });
      current = current.next;
      index++;
    }

    return nodes;
  };

  const nodes = getNodesArray();

  return (
    <Scene>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[4, 5, 5]} intensity={100} />
      {nodes.map((node, index) => (
        <LinkedListNode
          key={index}
          value={node.value}
          position={node.position}
        />
      ))}
    </Scene>
  );
};
