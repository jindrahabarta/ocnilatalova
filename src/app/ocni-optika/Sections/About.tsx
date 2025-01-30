import React from 'react'
import Image from 'next/image'

import ImgGlasses from '@/../public/images/GlassesImg1.webp'

const About = () => {
    return (
        <section id='o-nas' className='container pt-20'>
            <div className='flex flex-col md:flex-row gap-10 mt-10'>
                <div className='flex-1'>
                    <h1 className=''>Oční optika</h1>
                    <p className='mt-4'>
                        Naše optika se jako jedna z mála v Olomouci specializuje
                        na děti. Nabízíme široký sortiment brýlí i obrub pro
                        děti všech věkových kategorií. Velkou výhodou je, že
                        naše optika spolupracuje s vlastním očním dětským
                        lékařem, který má ordinaci ve stejné budově. Z ordinace
                        tedy nemusíte nikam chodit, abyste našli to, co
                        potřebujete. Vše najdete u nás.
                    </p>

                    <p className='mt-4'>
                        Další výhodou je možnost vyměřování, které provádí náš
                        zkušený personál. Měříme dioptrie i nitrooční tlak.
                    </p>
                    <p className='mt-4'>
                        Pokud hledáte příjemné prostředí, kde se vy i vaše děti
                        budete cítit dobře, pak vyzkoušejte optiku Olomouc. Jsme
                        zavedená optika s tradicí a víme, že vstřícnost,
                        profesionalita a spolehlivost jsou stejně důležité, jako
                        kvalitní produkty a dobré ceny. V naší optice je možno
                        platit platebními kartami. U nás to vše naleznete.
                        Přjďte se přesvědčit do naší optiky na ulici Kavaleristů
                        10.
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
