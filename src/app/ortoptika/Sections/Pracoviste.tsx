import React from 'react'
import Image from 'next/image'

import Okluzor from '@/../public/images/okluzor.webp'

const Pracoviste = () => {
    return (
        <section id='o-nas' className='container pt-20'>
            <div className='flex flex-col-reverse md:flex-row gap-10 mt-10'>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <Image
                        src={Okluzor}
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl'
                    ></Image>
                </div>
                <div className='flex-1 aboutUsPart translate-y-16 opacity-0'>
                    <h1 className=''>Pracoviště</h1>
                    <p className='mt-4'>
                        Pracoviště ortoptiky poskytuje pleopticko - ortoptickou
                        léčbu na doporučení očního lékaře - specialisty
                        strabologa s funkční licencí F20, který se zabývá léčbou
                        dětských zrakových vad, tupozrakostí / amblyopií,
                        šilháním a poruchami prostorových funkcí.
                    </p>

                    <p className='mt-4'>
                        V úzké spolupráci lékaře s ortoptistou je prováděna
                        komplexní léčba k co nejefektivnějšímu léčebného
                        výsledku. Léčba je prováděna na specializovaných
                        přístrojích určených časových turnusech. Spolupráce
                        rodičů a dodržování další léčby je nezbytností.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Pracoviste
