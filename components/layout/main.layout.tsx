interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
