import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  try {
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
        prixIntra,
        prixInter,
        pole,
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
  } catch (err) {
    console.error('Formations API error:', err);
    return NextResponse.json(
      { error: 'Impossible de récupérer les formations' },
      { status: 502 }
    );
  }
}
