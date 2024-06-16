import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { error: 'ID is required.' },
                { status: 400 }
            );
        }

        await sql`BEGIN`;
        try {
            await sql`UPDATE Downloads SET Count = Count + 1 WHERE ID = ${id}`;
            await sql`COMMIT`;

            return NextResponse.json(
                { message: 'Count successfully updated!' },
                { status: 200 }
            );
        } catch (error) {
            await sql`ROLLBACK`;
            throw error;
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
