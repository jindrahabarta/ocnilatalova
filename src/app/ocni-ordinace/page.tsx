import { Metadata } from 'next'
import React from 'react'
import About from './Sections/About'
import OurTeam from '../../../public/components/Global/OurTeam'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroGreen.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import Services from '../../../public/components/Global/Services'

import OcniOrdinaceImg from '@/../public/images/OcniOrdinace/simon1.jpg'

import OlgaFloder from '@/../public/images/Medailonky/OlgaFloder.jpg'
import OlgaLatalova from '@/../public/images/Medailonky/OlgaLatalova.jpg'

export const metadata: Metadata = {
    title: 'Oční ordinace',
    description:
        'Oční ordinace Látalová v Olomouci: komplexní péče o zrak, zkušený tým, ortoptická cvičení, moderní přístroje, bezbariérový přístup, specializace na děti.',
}

const OcniOrdinace = () => {
    return (
        <div className='w-full flex flex-col'>
            <Hero
                title={'Oční Ordinace'}
                className='bg-green/20'
                img1={HeroImg1}
                img2={HeroImg2}
                button1={{
                    className:
                        'bg-green border-green sm:hover:bg-transparent sm:hover:text-black',
                    text: 'Otevírací doba',
                    link: '#oteviraci-doba',
                }}
                button2={{
                    className: 'border-green sm:hover:bg-green',
                    text: 'O nás',
                    link: '#o-nas',
                    variant: 'stroke',
                }}
                tableHover={'sm:group-hover:text-green'}
            ></Hero>

            <About></About>

            <Services
                topText={
                    'V našem specializovaném lékařském pracovišti poskytuje metyto služby:'
                }
                image={OcniOrdinaceImg}
                bottomText=' To vše a mnohem více naleznete v naší oční optice v
                        Olomouci.'
            >
                <ul className='list-disc mt-4 pl-4'>
                    <li>
                        Vyšetření na <strong>OCT přístroji</strong> více
                        informací zde
                    </li>
                    <li>
                        Vyšetření, sledování a léčba pacientů s{' '}
                        <strong>očním onemocněním</strong>
                        (katarakta, glaukom, záněty, refrakční vady a jiné),
                        preventivní kontrolní vyšetření u pacientů s rizikem
                        vzniku očního onemocnění, vyšetření u indikovaných
                        pacientů se <strong>systémovým onemocněním</strong>
                        (pacienti s <strong>cukrovkou</strong>,{' '}
                        <strong>vysokým krevním tlakem</strong>, s{' '}
                        <strong>endokrinní</strong> či{' '}
                        <strong>autoimunitní chorobou</strong> a jinými)
                    </li>
                    <li>
                        <strong>Ortoptika</strong> - zabývá se poruchami{' '}
                        <strong>zrakových funkcí</strong>
                        spojených se změnami <strong>postavení očí</strong>
                        (tj. šilháním - <strong>strabismem</strong>) a{' '}
                        <strong>tupozrakostí</strong>
                        (amblyopií), poruchy{' '}
                        <strong>prostorových funkcí</strong> (binokularita) -
                        diagnostika těchto poruch, terapie pomocí komplexních
                        <strong>pleopticko-ortoptických cvičení</strong>
                    </li>
                    <li>
                        Práce se <strong>zrakově postiženými</strong>
                    </li>
                    <li>
                        <strong>Kontaktologie</strong> – kontaktní čočky
                    </li>
                    <li>
                        <strong>Zraková edukace</strong>
                    </li>
                </ul>
            </Services>

            <OurTeam
                className='grid-cols-2'
                background={{
                    transition: 'from-green/10 to-transparent',
                    bg: 'bg-green/10',
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
                ]}
                title={'Vedoucí lékaři'}
                title2={'Společně fungujeme již od roku 2013'}
            ></OurTeam>
            <OpeningTable
                className='bg-green/10'
                contactClassName='sm:group-hover:text-green'
                table={{
                    mon: '8-12',
                    wed: '8-12',
                    tue: '8-12',
                    thu: '8-12',
                    fri: '8-12',
                    sut: '8-12',
                    sun: 'Zavřeno',
                }}
            ></OpeningTable>
        </div>
    )
}

export default OcniOrdinace
