import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS Downloads (
                ID VARCHAR(255) PRIMARY KEY, 
                Count INTEGER DEFAULT 0
            )
        `;
        await sql`
            INSERT INTO Downloads (ID, Count)
            VALUES(${process.env.NEXT_PUBLIC_ID}, 0)
            ON CONFLICT(ID) DO NOTHING;
        `;
        return NextResponse.json(
            { message: 'Table successfully created.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
