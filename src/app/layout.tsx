import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '../../public/components/Navigation/Navigation'
import Footer from '../../public/components/Footer/Footer'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: {
        default: 'Oční látalová Olomouc',
        template: '%s | Oční látalová Olomouc',
    },
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    description: '',
    keywords: [
        '3D Tisk',
        'Zakázkový 3D tisk',
        '3D tisk na zakázku',
        'Printuj to',
    ],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Oční látalová Olomouc',
        description:
            'Poskytujeme kvalitní tisk s různými materiály pro rychlé prototypování a náhradní díly.',
        images: [
            'https://res.cloudinary.com/dlhgypwnv/image/upload/nahled1_e3ewta.png',
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body
                className={`${poppins.className} antialiased flex flex-col justify-between min-h-screen`}
            >
                <Navigation></Navigation>

                <main>{children}</main>

                <Footer></Footer>
            </body>
        </html>
    )
}
