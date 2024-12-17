import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { album, artist } = await request.json();

        if (!album || !artist) {
            return NextResponse.json(
                { error: "Album and artist are required." },
                { status: 400 }
            )
        }

        await sql`BEGIN`;
        try {

            await sql`
                UPDATE Downloads
                SET Count = Count + 1
                WHERE ID = ${process.env.NEXT_PUBLIC_ID}
            `
            await sql`
                INSERT INTO Logs(album, artist)
                VALUES(${album}, ${artist})
            `
            await sql`COMMIT`;

            return NextResponse.json({ message: "Download count and log successfully updated!" }, { status: 200 })

        } catch (error) {
            await sql`ROLLBACK`;
            throw error;
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
