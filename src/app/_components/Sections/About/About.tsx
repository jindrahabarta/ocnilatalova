import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='container flex gap-10 relative'>
            <div className='absolute top-0 left-8 max-w-[50%]'>
                <h1 className=' text-7xl uppercase'>Pár slov o náší klinice</h1>
                <h2 className='text-5xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur fuga inventore, illum vel, rerum fugit id
                    reiciendis repellendus
                </h2>
            </div>

            <div className='flex-[3]'></div>
            <div className='flex-[9] pt-10'>
                <Image
                    src={
                        'https://framerusercontent.com/images/MpAHZ5m0wRWS4qmFtIVd3W4Efs.png'
                    }
                    width={800}
                    height={800}
                    alt={'Obrázek o nás'}
                    className='w-full object-cover aspect-video  shadow-md'
                ></Image>

                <div className='flex gap-8 mt-8'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Provident, laudantium eaque. Dolore nostrum
                        molestiae vitae natus nulla officia libero? Aut maxime,
                        ipsum totam laudantium praesentium excepturi nemo.
                        Accusantium, necessitatibus hic?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt aspernatur quo omnis magnam quos soluta quae
                        optio eveniet, animi corrupti eum eaque cumque molestiae
                        vel possimus ab magni dolore in!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
