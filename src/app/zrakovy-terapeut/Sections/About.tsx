import React from 'react'
import Image from 'next/image'

import ImgGlasses from '@/../public/images/Ortoptika1.jpg'

const About = () => {
    return (
        <section id='o-nas' className='container py-20'>
            <div className='flex flex-col sm:flex-row gap-10 mt-10'>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <h1 className=''>O zrakové terapii</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus reprehenderit autem magni praesentium inventore
                        esse aliquid facere excepturi, eius ad officiis!
                        Consectetur, porro quidem accusantium quisquam deserunt
                        neque optio soluta?
                    </p>
                    <p className='mt-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Labore odit dolorem rem ipsam molestias dolorum
                        nesciunt in eaque facere dolor incidunt delectus, sequi
                        odio perspiciatis exercitationem, velit laboriosam
                        veritatis sint.
                    </p>
                </div>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <Image
                        src={ImgGlasses}
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default About
