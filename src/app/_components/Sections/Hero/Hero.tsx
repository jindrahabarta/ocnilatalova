import React from 'react'
import ContactTable from './ContactTable'
import MainContent from './MainContent'

const Hero = () => {
    return (
        <section id='hero' className='h-fit md:h-screen pb-16'>
            <div className='flex flex-col h-full bg-green/10 relative'>
                <MainContent></MainContent>

                <div className='relative sm:absolute px-8 max-w-[1300px] -translate-x-1/2  -bottom-10 left-1/2 w-full'>
                    <ContactTable></ContactTable>
                </div>
            </div>
        </section>
    )
}

export default Hero
