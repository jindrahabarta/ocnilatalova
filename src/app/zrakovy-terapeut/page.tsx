import { Metadata } from 'next'
import React from 'react'
import Hero from '../../../public/components/Hero/Hero'

import HeroImg1 from '@/../public/images/Hero/HeroOrange.webp'
import HeroImg2 from '@/../public/images/Hero/HeroBackground.webp'
import OpeningTable from '../../../public/components/Global/OpeningTable'

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

            <OpeningTable
                img={HeroImg1}
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
            ></OpeningTable>
        </div>
    )
}

export default ZrakovyTerapeut
