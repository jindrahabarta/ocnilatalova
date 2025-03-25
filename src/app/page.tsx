import { Metadata } from 'next'
import Hero from './_components/Sections/Hero/Hero'
import Services from './_components/Sections/Services/Services'
import OurTeam from '../../public/components/Global/OurTeam'
import About from './_components/Sections/About/About'

import VeronikaRuzickova from '@/../public/images/Medailonky/VeronikaRuzickova.jpg'
import OlgaFloder from '@/../public/images/Medailonky/OlgaFloder.jpg'
import OlgaLatalova from '@/../public/images/Medailonky/OlgaLatalova.jpg'

export const metadata: Metadata = {
    title: 'Úvod | Oční Látalová Olomouc',
}

export default function Home() {
    return (
        <div className='w-full flex flex-col gap-20'>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <OurTeam
                className='md:grid-cols-3 grid-cols-2'
                background={{
                    transition: 'from-blue/10 to-transparent',
                    bg: 'bg-blue/10',
                }}
                team={[
                    {
                        name: 'MUDr. Olga Látalová',
                        role: 'Vedoucí lékař',
                        quote: 'Dlouhodobě jsem pracovala na Oční klinice FN Olomouc, kde jsem se specializovala na dětskou oftalmologii, diagnostiku a léčbu šilhání i binokulárních funkcí.',
                        image: OlgaLatalova,
                    },
                    {
                        name: 'MUDr. Olga Floder',
                        role: 'Lékař',
                        quote: 'Jsem držitelkou Funkční licence F020 pro vyšetření senzorických a motorických složek binokulárního vidění. Zaměřuji se hlavně na dětskou oftamologii.',
                        image: OlgaFloder,
                    },
                    {
                        name: 'PhDr. Veronika Růžičková',
                        role: 'Zrakový terapeur',
                        quote: 'Jsem odborná asistentka, zraková terapeutka a instruktorka prostorové orientace se zaměřením na osoby se zrakovým postižením.',
                        image: VeronikaRuzickova,
                    },
                ]}
                title={'Lékaři'}
                title2={'Postaráme se o váš zrak'}
            ></OurTeam>
        </div>
    )
}
