import { Metadata } from 'next'
import React from 'react'
import About from './Sections/About'
import OurTeam from '../../../public/components/Global/OurTeam'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroGreen.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import Services from '../../../public/components/Global/Services'

import OcniOrdinaceImg from '@/../public/images/OcniOrdinace.webp'

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
                    link: '#oteviraci-doba',
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
                    <li>Nabízíme široký sortiment brýlových obrub</li>
                    <li>Specializujeme se na dětské brýlové obruby</li>
                    <li>Úzká spolupráce oční optiky s lékařem</li>
                    <li>
                        Speciální brýle a optické pomůcky v rámci komplexní
                        léčby tupozrakosti a šilhání
                    </li>
                    <li>
                        Možnost měření dioptríí a nitroočního tlaku
                        kvalifikovaným zdravotnickým personálem na vedlejším
                        pracovišti
                    </li>
                    <li>Aplikujeme kontaktní čočky</li>
                    <li>
                        Kvalitní sluneční brýle nejen pro dospělé, ale i pro
                        děti
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
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                    },
                    {
                        name: 'MUDr. Olga Floder',
                        role: 'Lékař',
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
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
