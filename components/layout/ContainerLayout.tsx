import { cn } from "@/libs/utils";

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}
export const ContainerLayout = ({
  className,
  full,
  children,
}: ContainerLayoutProps) => {
  return (
    <>
      <section className={cn(`${full ? "w-full" : ""}`, className)}>
        {children}
      </section>
    </>
  );
};
