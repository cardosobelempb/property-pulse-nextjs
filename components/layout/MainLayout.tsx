import { cn } from "@/libs/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}
export const MainLayout = ({ className, full, children }: MainLayoutProps) => {
  return (
    <>
      <main className={cn(`w-full`, className)}>{children}</main>
    </>
  );
};
