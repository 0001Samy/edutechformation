import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const data = await client.fetch(`
    *[_type == "formation"]{
      _id,
      titre,
      description,
      duree,
      etudiants,
      note,
      prix,
      modules,
      objectifs,
      lien,
      slug,
      "imageUrl": image.asset->url
    }
  `);

  return NextResponse.json(data);
}
