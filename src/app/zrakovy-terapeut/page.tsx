import { Metadata } from 'next'
import React from 'react'
import Hero from '../../../public/components/Hero/Hero'
import HeroImg1 from '@/../public/images/Hero/HeroOrange.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import About from './Sections/About'
import Services from '../../../public/components/Global/Services'

import ImgGlasses from '@/../public/images/Ortoptika2.jpg'

export const metadata: Metadata = {
    title: 'Zrakový terapeut',
    description: 'Oční optika olomouc',
}

const ZrakovyTerapeut = () => {
    return (
        <div className='w-full flex flex-col'>
            <Hero
                title={'Zrakový terapeut'}
                className='bg-orange/20'
                img1={HeroImg1}
                img2={HeroImg2}
                button1={{
                    className:
                        'bg-orange border-orange sm:hover:bg-transparent',
                    text: 'Otevírací doba',
                    link: '#oteviraci-doba',
                }}
                button2={{
                    className: ' border-orange sm:hover:bg-orange',
                    text: 'O nás',
                    link: '#oteviraci-doba',
                    variant: 'stroke',
                }}
                tableHover={'sm:group-hover:text-orange'}
            ></Hero>

            <About></About>

            <Services
                topText={'Poskytujeme tyto služby'}
                image={ImgGlasses}
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

            <OpeningTable
                className='bg-orange/10'
                table={{
                    mon: '8-12',
                    wed: '8-12',
                    tue: '8-12',
                    thu: '8-12',
                    fri: '8-12',
                    sut: '8-12',
                    sun: 'Zavřeno',
                }}
                contactClassName={'sm:group-hover:text-orange'}
            ></OpeningTable>
        </div>
    )
}

export default ZrakovyTerapeut
