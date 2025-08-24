import { Canvas } from "@react-three/fiber";

export const Scene = ({ children }: { children: React.ReactNode }) => {
  return <Canvas>{children}</Canvas>;
};
