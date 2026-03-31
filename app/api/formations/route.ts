import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const data = await client.fetch(`
    *[_type == "formation"]{
      _id,
      titre,
      description,
      duree,
      horaires,
      etudiants,
      note,
      prix,
      participantsMin,
      participantsMax,
      modules,
      objectifs,
      contenuFormation,
      publicConcerne,
      prerequis,
      modalitesAcces,
      modalitesEvaluation,
      suiviExecution,
      appreciationResultats,
      moyensPedagogiques,
      profilFormateur,
      lien,
      slug,
      "imageUrl": image.asset->url
    }
  `);

  return NextResponse.json(data);
}
