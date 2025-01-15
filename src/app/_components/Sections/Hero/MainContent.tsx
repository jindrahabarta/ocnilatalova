import React from 'react'
import Image from 'next/image'

import OkoFront from '@/../public/images/Hero/ocko_front.png'
import OkoBg2 from '@/../public/images/Hero/ocko_bg2.png'
import Button from '../../../../../public/components/Buttons/Button'

const MainContent = () => {
    return (
        <div className='container flex-1 flex flex-col md:flex-row gap-10 pt-32 md:pt-10'>
            <article className='heroPart opacity-0 translate-y-16 flex-1 flex flex-col justify-center items-start'>
                <h1 className='text-6xl'>
                    Oční klinika <em className=' not-italic'>Látalová</em>
                </h1>
                <h2 className='mt-4'>Postaráme se o váš zrak</h2>
                <div className='mt-8 flex gap-4'>
                    <Button text={'Služby'} link={'/'}></Button>
                    <Button variant='stroke' text={'O nás'} link={'/'}></Button>
                </div>
            </article>

            <div className='heroPart opacity-0 translate-y-16 relative flex-1 flex items-center select-none pointer-events-none'>
                <Image
                    id='heroImgBg'
                    className='absolute'
                    src={OkoBg2}
                    alt={''}
                ></Image>
                <Image
                    id='heroImgFront'
                    className='md:absolute relative'
                    src={OkoFront}
                    alt={''}
                ></Image>
            </div>
        </div>
    )
}

export default MainContent
