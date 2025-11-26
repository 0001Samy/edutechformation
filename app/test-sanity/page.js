import { client } from "@/sanity/lib/client";

export default async function TestSanityPage() {
  const data = await client.fetch(`*[_type == "formation"]`);

  return (
    <pre style={{ padding: 20 }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
