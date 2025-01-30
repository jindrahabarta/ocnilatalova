import React from 'react'
import Image from 'next/image'

import ImgGlasses from '@/../public/images/Ortoptika2.jpg'

const Services = () => {
    return (
        <section
            id='services'
            className='py-20 mt-20 w-full relative flex items-center'
        >
            <Image
                className='w-full h-full absolute top-0 object-cover rounded-2xl'
                src={ImgGlasses}
                alt={'ocni ordinace'}
                width={2000}
                height={1500}
            ></Image>

            <div className='container relative'>
                <div className='bg-white/70 border border-black/20 backdrop-blur-md w-full sm:w-2/3 md:w-1/2 rounded-xl p-8 '>
                    <h2 className='text-xl'>
                        V našem specializovaném lékařském pracovišti poskytujeme
                        tyto služby:
                    </h2>
                    <ul className='list-disc mt-4 pl-4'>
                        <li>Nabízíme široký sortiment brýlových obrub</li>
                        <li>Specializujeme se na dětské brýlové obruby</li>
                        <li>Úzká spolupráce oční optiky s lékařem</li>
                        <li>
                            Speciální brýle a optické pomůcky v rámci komplexní
                            léčby tupozrakosti a šilhání
                        </li>
                        <li>
                            Možnost měření dioptríí a nitroočního tlaku
                            kvalifikovaným zdravotnickým personálem na vedlejším
                            pracovišti
                        </li>
                        <li>Aplikujeme kontaktní čočky</li>
                        <li>
                            Kvalitní sluneční brýle nejen pro dospělé, ale i pro
                            děti
                        </li>
                    </ul>
                    <p className='text-base mt-4'>
                        To vše a mnohem více naleznete v naší oční optice v
                        Olomouci.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
