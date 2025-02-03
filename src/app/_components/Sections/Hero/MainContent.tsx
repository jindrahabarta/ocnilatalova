import React from 'react'
import Image from 'next/image'
import Button from '../../../../../public/components/Buttons/Button'

import HeroPhoto from '@/../public/images/HeroPhoto.jpg'

const MainContent = () => {
    return (
        <div className='container flex-1 flex flex-col md:flex-row gap-10 pt-32'>
            <article className='heroPart opacity-0 translate-y-16 flex-1 flex flex-col justify-center items-start'>
                <h1 className='text-5xl sm:text-6xl sm:leading-tight'>
                    Oční ordinace a Ortoptika
                </h1>

                <div className='mt-8 flex flex-wrap gap-4'>
                    <Button
                        text={'Naše služby'}
                        link={'/#nase-sluzby'}
                        className='bg-blue border-blue'
                    ></Button>
                    <Button
                        variant='stroke'
                        text={'O nás'}
                        link={'/#o-nas'}
                        className='sm:hover:bg-blue border-blue'
                    ></Button>
                </div>
            </article>

            <div className='heroPart opacity-0 translate-y-16 relative flex-1 flex items-center select-none pointer-events-none'>
                <Image
                    className=' relative rounded-2xl md:max-w-lg w-full aspect-[video]'
                    src={HeroPhoto}
                    width={1000}
                    height={1000}
                    alt={'Úvodmí fotka Oční klinika Látalová'}
                ></Image>
            </div>
        </div>
    )
}

export default MainContent
