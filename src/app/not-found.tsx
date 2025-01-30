import React from 'react'
import Image from 'next/image'
import E404Img from '@/../public/images/404/E404.png'

import { Metadata } from 'next'
import Button from '../../public/components/Buttons/Button'

export const metadata: Metadata = {
    title: 'Stránka nebyla nalezena |',
    description: '',
}

const NotFound = () => {
    return (
        <section className='pt-24 h-screen flex flex-col lg:flex-row gap-10 items-center justify-center container'>
            <Image
                className='select-none flex-1'
                src={E404Img}
                alt='Error 404 Image'
            ></Image>
            <div className='z-20 flex-[2]'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl'>
                    Tato stránka neexistuje
                </h1>
                <p className='mt-4'>Tuto stránku se nepodařilo najít</p>
                <div className='flex justify-end sm:justify-start'>
                    <Button
                        text={'Přejít zpátky domů'}
                        link={'/'}
                        className='mt-4 bg-blue border-blue sm:hover:bg-transparent '
                    ></Button>
                </div>
            </div>
        </section>
    )
}

export default NotFound
