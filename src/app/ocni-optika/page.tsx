import { Metadata } from 'next'
import React from 'react'
import Hero from './Sections/Hero/Hero'

export const metadata: Metadata = {
    title: 'Oční optika',
    description: 'Oční optika olomouc',
}

const OcniOptika = () => {
    return (
        <div id='ocniOptikaPage' className='w-full flex flex-col'>
            <Hero></Hero>
        </div>
    )
}

export default OcniOptika
