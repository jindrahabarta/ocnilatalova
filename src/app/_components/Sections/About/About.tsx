import React from 'react'
import Image from 'next/image'

import AboutImg from '@/../public/images/Homepage/O-ordinaci.jpg'

const About = () => {
    return (
        <section id='o-nas' className='container py-20'>
            <div className='flex flex-col md:flex-row gap-10 mt-10'>
                <div className='flex-1'>
                    <h1>Pár slov o naší klinice</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro a nihil sint suscipit ullam fugit unde numquam cum
                        impedit itaque molestias, incidunt aliquid ea quasi
                        neque id inventore aliquam eum.
                    </p>
                    <p className='mt-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vitae consequuntur a, aliquam unde dicta autem,
                        aliquid numquam ipsum dolore tenetur alias eveniet
                        voluptatum possimus repellat pariatur ipsa aut accusamus
                        reiciendis.
                    </p>
                </div>
                <div className='flex-1'>
                    <Image
                        src={AboutImg}
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl aspect-video object-cover'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default About
