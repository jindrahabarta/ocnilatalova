import React from 'react'
import Image from 'next/image'

import ImgGlasses from '@/../public/images/Ortoptika1.jpg'

const About = () => {
    return (
        <section id='o-ortoptice' className='container pt-20'>
            <div className='flex flex-col md:flex-row gap-10 mt-10'>
                <div className='flex-1 '>
                    <h1 className=''>O ortoptice</h1>
                    <p className='mt-4'>
                        Ortoptika je nelékařský obor zaměřený na neoperativní
                        léčbu šilhání, zlepšení zrakové ostrosti a obnovení
                        prostorového vidění. Název pochází z řeckých slov ortho
                        (přímo) a optikas (vidění).
                    </p>
                    <p className='mt-4'>
                        Specializuje se na pacienty, zejména děti, s poruchami
                        binokulárního vidění, šilháním či tupozrakostí. Cílem je
                        dosažení co nejlepší zrakové funkce a usnadnění
                        začlenění do běžného života.
                    </p>
                    <p className='mt-4'>
                        Vyšetření probíhá na troposkopu, který měří úchylku
                        šilhání, prostorové vidění, konvergenci očí a barvocit.
                        Ortoptika hraje klíčovou roli v diagnostice a terapii
                        vrozených i získaných očních vad.
                    </p>
                </div>
                <div className='flex-1'>
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
