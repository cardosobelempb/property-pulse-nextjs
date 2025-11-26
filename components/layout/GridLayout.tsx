import { cn } from "@/libs/utils";

interface BoxLayoutProps {
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
}
export const GridLayout = ({ className, grid, children }: BoxLayoutProps) => {
  return (
    <>
      <div
        className={cn(
          `grid grid-cols-70/30 md:grid-cols-70/30 w-full gap-6`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
