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
    title: '%s | Oční látalová Olomouc',
    description: 'Oční optika olomouc',
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
