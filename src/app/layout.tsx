import { Config } from '@/configs';
import './globals.css';
import type { Metadata } from 'next';
import { Varela_Round } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const valeraRound = Varela_Round({
    subsets: ['latin'],
    weight: '400',
    variable: '--varela-round'
})

export const metadata: Metadata = {
    title: Config.TITLE,
    description: 'Create, edit, and download posters of your favorite albums.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={valeraRound.variable}>
            <body>{children}</body>
            <Analytics/>
        </html>
    );
}
