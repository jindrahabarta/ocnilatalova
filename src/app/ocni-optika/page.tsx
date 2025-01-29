import { Metadata } from 'next'
import React from 'react'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroBlue.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'
import About from './Sections/About'
import Services from './Sections/Services'
import DeleniCocek from './Sections/DeleniCocek'

export const metadata: Metadata = {
    title: 'Oční optika',
    description: 'Oční optika olomouc',
}

const OcniOptika = () => {
    return (
        <div className='w-full flex flex-col'>
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
                    text: 'O službě',
                    link: '#o-nas',
                    variant: 'stroke',
                }}
                tableHover={'sm:group-hover:text-blue'}
            ></Hero>

            <About></About>

            <Services></Services>

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
