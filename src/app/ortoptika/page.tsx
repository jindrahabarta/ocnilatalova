import { Metadata } from 'next'
import React from 'react'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroViolet.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import About from './Sections/About'
import Pracoviste from './Sections/Pracoviste'
import PoruchyVideni from './Sections/PoruchyVideni/PoruchyVideni'

export const metadata: Metadata = {
    title: 'Ortoptika',
    description: 'Oční optika olomouc',
}

const Ortoptika = () => (
    <div className='w-full flex flex-col'>
        <Hero
            title={'Ortoptika'}
            className='bg-violet/20'
            img1={HeroImg1}
            img2={HeroImg2}
            button1={{
                className: 'bg-violet border-violet sm:hover:bg-transparent',
                text: 'Otevírací doba',
                link: '#oteviraci-doba',
            }}
            button2={{
                className: ' border-violet sm:hover:bg-violet',
                text: 'O ortoptice',
                link: '#o-nas',
                variant: 'stroke',
            }}
            tableHover={'sm:group-hover:text-violet'}
        ></Hero>

        <About></About>

        <Pracoviste></Pracoviste>

        <PoruchyVideni></PoruchyVideni>

        <OpeningTable
            className='bg-violet/10'
            contactClassName='sm:group-hover:text-violet'
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

export default Ortoptika
