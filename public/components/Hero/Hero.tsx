import React from 'react'
import MainContent from './MainContent'
import ContactTable from './ContactTable'
import { StaticImageData } from 'next/image'

interface props {
    title: string
    img1: StaticImageData
    img2: StaticImageData
    className?: string

    button1: {
        className: string
        text: string
        link: string
        variant?: string
    }

    button2: {
        className: string
        text: string
        link: string
        variant?: string
    }

    tableHover: string
}

const Hero = ({
    title,
    className,
    img1,
    img2,
    button1,
    button2,
    tableHover,
}: props) => {
    return (
        <section className='h-fit md:h-screen pb-16'>
            <div className={`flex flex-col h-full ${className} relative`}>
                <MainContent
                    title={title}
                    img1={img1}
                    img2={img2}
                    button1={{
                        className: button1.className,
                        text: button1.text,
                        link: button1.link,
                        variant: button1.variant,
                    }}
                    button2={{
                        className: button2.className,
                        text: button2.text,
                        link: button2.link,
                        variant: button2.variant,
                    }}
                ></MainContent>

                <div className='relative md:absolute px-2 sm:px-8 max-w-[1300px] -translate-x-1/2  -bottom-10 left-1/2 w-full'>
                    <ContactTable color={tableHover}></ContactTable>
                </div>
            </div>
        </section>
    )
}

export default Hero
