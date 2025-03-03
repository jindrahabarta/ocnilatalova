import React from 'react'
import Image from 'next/image'

import ZrakovaTerapie from '@/../public/images/ZrakovaTerapie.jpg'

const About = () => {
    return (
        <section id='o-nas' className='container py-20'>
            <div className='flex flex-col sm:flex-row gap-10 mt-10'>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <h1 className=''>O zrakové terapii</h1>
                    <p className='mt-4'>
                        Máte potíže se zrakem nebo hledáte odbornou pomoc?
                        Zraková terapie pomáhá diagnostikovat a rozvíjet zrakové
                        funkce pomocí speciálních metod, pomůcek a technik.
                        Zaměřuje se na zlepšení zrakového vnímání pro každodenní
                        aktivity, vzdělávání i samostatný pohyb.
                    </p>
                    <p className='mt-4'>
                        Zrakový terapeut provádí funkční vyšetření zraku,
                        zrakovou stimulaci a výcvik. Hodnotí zrakovou ostrost,
                        kontrastní citlivost, zorné pole a další aspekty vidění.
                        Pomáhá s nácvikem kompenzačních technik a navrhuje
                        úpravy prostředí pro lepší využití zbytkového zraku.
                    </p>
                </div>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <Image
                        src={ZrakovaTerapie}
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
