import React from 'react'
import { StaticImageData } from 'next/image'

const Services = ({
    topText,
    bottomText,
    image,
    children,
}: {
    topText: string
    bottomText?: string
    image: StaticImageData
    children: React.JSX.Element
}) => {
    return (
        <section
            id='services'
            className=' h-fit min-h-[80vh] relative flex items-center rounded-2xl overflow-hidden '
        >
            <div
                className='servicesBg absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed'
                style={{
                    backgroundImage: `url(${image.src})`,
                }}
            ></div>

            <div className=' w-full h-full container p-10 rounded-2xl  flex items-center '>
                <div className='servicesContent bg-white/70 border border-black/20 backdrop-blur-md w-full sm:w-2/3 md:w-1/2 rounded-xl p-8 '>
                    <h2 className='text-xl'>{topText}</h2>

                    {children}

                    {bottomText && (
                        <p className='text-base mt-4'>{bottomText}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services
