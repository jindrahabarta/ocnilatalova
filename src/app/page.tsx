import { Metadata } from 'next'
import Hero from './_components/Sections/Hero/Hero'
import About from './_components/Sections/About/About'
import Services from './_components/Sections/Services/Services'
import OurTeam from './_components/Sections/OurTeam/OurTeam'

export const metadata: Metadata = {
    title: 'Uvodni page | Oční látalová Olomouc',
    description: 'Oční optika olomouc',
}

export default function Home() {
    return (
        <div className='w-full flex flex-col gap-20'>
            <Hero></Hero>
            <Services></Services>
            {/* <About></About> */}

            <OurTeam></OurTeam>
        </div>
    )
}
