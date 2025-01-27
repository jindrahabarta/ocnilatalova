import React from 'react'
import Button from '../Buttons/Button'
import Image, { StaticImageData } from 'next/image'

interface props {
    title: string
    img1: StaticImageData
    img2: StaticImageData

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
}

const MainContent = ({ title, img1, img2, button1, button2 }: props) => {
    return (
        <div className='container flex-1 flex flex-col md:flex-row sm:gap-10 pt-32 md:pt-10'>
            <article className='heroPart opacity-0 translate-y-16 flex-1 flex flex-col justify-center items-start'>
                <h1 className='sm:text-6xl text-5xl'>{title}</h1>
                {/* <h2 className='mt-4'></h2> */}
                <div className='mt-4 sm:mt-8 flex flex-wrap gap-4'>
                    {button1 && (
                        <Button
                            className={button1.className}
                            text={button1.text}
                            link={button1.link}
                            variant={button1.variant}
                        ></Button>
                    )}

                    {button2 && (
                        <Button
                            variant={button2.variant}
                            text={button2.text}
                            link={button2.link}
                            className={button2.className}
                        ></Button>
                    )}
                </div>
            </article>

            <div className='heroPart opacity-0 translate-y-16 relative flex-1 flex items-center justify-center md:justify-start select-none pointer-events-none'>
                <Image
                    id='heroImgBg'
                    className='absolute w-full max-w-lg'
                    src={img2}
                    alt={'Hero obrázek'}
                ></Image>
                <Image
                    id='heroImgFront'
                    className='md:absolute relative w-full max-w-lg'
                    src={img1}
                    alt={'Hero obrázek pozadí'}
                ></Image>
            </div>
        </div>
    )
}

export default MainContent
