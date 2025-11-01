interface PropertyPageProps {
  params: Promise<{ id: string[] }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Property Page {id}</h1>
    </div>
  );
}
