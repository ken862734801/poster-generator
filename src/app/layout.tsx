import { Config } from '@/configs';
import './globals.css';
import type { Metadata } from 'next';
import { Varela_Round } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const valeraRound = Varela_Round({
    subsets: ['latin'],
    weight: '400',
    variable: '--varela-round',
});

export const metadata: Metadata = {
    title: Config.TITLE,
    description: 'Create, edit, and download your own album cover posters.',
    keywords: ['album cover poster', 'album posters', 'music posters'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={valeraRound.variable}>
            <head>
                {/* Google AdSense script */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4688997363929700"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body>{children}</body>
            <Analytics />
        </html>
    );
}
