import { cn } from "@/utils/cn";

type OverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export const Overlay = ({ children, className }: OverlayProps) => {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-sm border-white border rounded",
        className,
      )}
    >
      {children}
    </div>
  );
};
