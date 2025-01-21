import React from 'react'
import MainContent from './MainContent'
import ContactTable from './ContactTable'

const Hero = () => {
    return (
        <section id='ocniOrgdinacehero' className='h-fit md:h-screen pb-16'>
            <div className='flex flex-col h-full bg-blue/10 relative'>
                <MainContent></MainContent>

                <div className='relative sm:absolute px-8 max-w-[1300px] -translate-x-1/2  -bottom-10 left-1/2 w-full'>
                    <ContactTable></ContactTable>
                </div>
            </div>
        </section>
    )
}

export default Hero
