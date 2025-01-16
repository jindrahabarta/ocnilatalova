import { Metadata } from 'next'
import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Services from './Sections/Services'
import OpeningTable from './Sections/OpeningTable'
import OurTeam from '../../../public/components/Global/OurTeam'

export const metadata: Metadata = {
    title: 'Oční ordinace',
    description: 'Oční optika olomouc',
}

const OcniOrdinace = () => {
    return (
        <div id='ocniOrdinacePage' className='w-full flex flex-col'>
            <Hero></Hero>

            <About></About>
            <Services></Services>
            <OurTeam
                className='grid-cols-2'
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
            <OpeningTable></OpeningTable>
        </div>
    )
}

export default OcniOrdinace
