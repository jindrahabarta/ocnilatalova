import React from 'react'
import Image from 'next/image'

// import OkoFront from '@/../public/images/Hero/ocko_front.png'
// import OkoBg2 from '@/../public/images/Hero/ocko_bg2.png'
import Button from '../../../../../public/components/Buttons/Button'

const MainContent = () => {
    return (
        <div className='container flex-1 flex flex-col md:flex-row gap-10 pt-32 md:pt-10'>
            <article className='heroPart opacity-0 translate-y-16 flex-1 flex flex-col justify-center items-start'>
                <h1 className='text-6xl'>Oční ordinace</h1>
                {/* <h2 className='mt-4'></h2> */}
                <div className='mt-8 flex gap-4'>
                    <Button
                        className='bg-green border border-green'
                        text={'Otevírací doba'}
                        link={'#oteviraci-doba'}
                    ></Button>
                    <Button
                        variant='stroke'
                        text={'O nás'}
                        link={'#o-nas'}
                        className='border-green sm:hover:bg-green'
                    ></Button>
                </div>
            </article>

            <div className='heroPart opacity-0 translate-y-16 relative flex-1 flex items-center select-none pointer-events-none'>
                {/* <Image
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
                ></Image> */}

                <Image
                    className=' relative rounded-2xl max-w-lg'
                    src={
                        'https://lh3.googleusercontent.com/p/AF1QipNnX147DIcF0sKNynQkQnrJmh0xQ04rO_pxXYwq=s1360-w1360-h1020'
                    }
                    width={1000}
                    height={1000}
                    alt={'Úvodmí fotka'}
                ></Image>
            </div>
        </div>
    )
}

export default MainContent
