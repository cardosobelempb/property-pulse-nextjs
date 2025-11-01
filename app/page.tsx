import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[70%_30%]">
      <div>
        <h1 className="text-3xl">Hello World</h1>
      </div>
      <div>
        <Link href="properties">Go To Properties</Link>
      </div>
    </div>
  );
}
