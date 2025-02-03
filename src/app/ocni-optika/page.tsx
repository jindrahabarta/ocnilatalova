import { Metadata } from 'next'
import React from 'react'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroBlue.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import About from './Sections/About'

import DeleniCocek from './Sections/DeleniCocek'
import Services from '../../../public/components/Global/Services'

import ImgGlasses from '@/../public/images/Ortoptika2.jpg'

export const metadata: Metadata = {
    title: 'Oční optika',
    description:
        'Oční optika Látalová v Olomouci: specializace na děti, široký výběr brýlí, měření dioptrií, profesionální péče, spolupráce s dětským lékařem, příjemné prostředí.',
}

const OcniOptika = () => {
    return (
        <div className='w-full '>
            <Hero
                title={'Oční Optika'}
                className='bg-blue/20'
                img1={HeroImg1}
                img2={HeroImg2}
                button1={{
                    className:
                        'bg-blue border-blue sm:hover:bg-transparent sm:hover:text-black',
                    text: 'Otevírací doba',
                    link: '#oteviraci-doba',
                }}
                button2={{
                    className: 'border-blue sm:hover:bg-blue',
                    text: 'O Oční optice',
                    link: '#o-nas',
                    variant: 'stroke',
                }}
                tableHover={'sm:group-hover:text-blue'}
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

            <DeleniCocek></DeleniCocek>

            <OpeningTable
                className='bg-blue/10'
                contactClassName='sm:group-hover:text-blue'
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

export default OcniOptika
