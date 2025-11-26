import { cn } from "@/libs/utils";

interface ContentLayoutProps {
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
  full?: boolean;
}
export const ContentLayout = ({
  className,
  full,
  children,
}: ContentLayoutProps) => {
  return (
    <>
      <div
        className={cn(
          `${full ? "w-full" : "container-xl lg:container m-auto px-4"}`,

          className
        )}
      >
        {children}
      </div>
    </>
  );
};
