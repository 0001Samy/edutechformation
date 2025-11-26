import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const data = await client.fetch(`
    *[_type == "formation"]{
      _id,
      titre,
      description,
      prix,
      lien,
      "imageUrl": image.asset->url
    }
  `);

  return NextResponse.json(data);
}
