import Link from "next/link";
import { cn } from "../libs/utils";

interface InfoBoxeProps {
  heading?: string;
  backgroundColor?: string;
  textColor?: string;
  btn: {
    heading?: string;
    href?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  children?: React.ReactNode;
}

export default function InfoBox({
  heading,
  btn,
  children,
  backgroundColor = "bg-gray-100 dark:bg-gray-800",
  textColor = "text-black dark:text-white",
}: InfoBoxeProps) {
  return (
    <div className={cn(`p-6 rounded-lg shadow-md`, backgroundColor)}>
      <h2 className={cn(`text-2xl font-bold`, textColor)}>{heading}</h2>
      <p className={cn(`mt-2 mb-4`, textColor)}>{children}</p>
      <Link
        href={btn.href || "#"}
        className={cn(
          `inline-block rounded-lg px-4 py-2`,
          btn.backgroundColor,
          btn.textColor
        )}
      >
        {btn.heading}
      </Link>
    </div>
  );
}
