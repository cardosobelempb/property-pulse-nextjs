import { cn } from "@/libs/utils";

interface BoxLayoutProps {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}
export const BoxLayout = ({ className, full, children }: BoxLayoutProps) => {
  return (
    <>
      <div className={cn(`${full ? "w-full" : ""}`, className)}>{children}</div>
    </>
  );
};
