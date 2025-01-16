import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section id='o-nas' className='container pt-20'>
            <h1>Pár slov o naší klinice</h1>
            <div className='flex flex-col md:flex-row gap-10 mt-10'>
                <div className='flex-1'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro a nihil sint suscipit ullam fugit unde numquam cum
                        impedit itaque molestias, incidunt aliquid ea quasi
                        neque id inventore aliquam eum.
                    </p>
                    <p className='mt-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vitae consequuntur a, aliquam unde dicta autem,
                        aliquid numquam ipsum dolore tenetur alias eveniet
                        voluptatum possimus repellat pariatur ipsa aut accusamus
                        reiciendis.
                    </p>
                </div>
                <div className='flex-1'>
                    <Image
                        src={
                            'https://lh3.googleusercontent.com/p/AF1QipNnX147DIcF0sKNynQkQnrJmh0xQ04rO_pxXYwq=s1360-w1360-h1020'
                        }
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl aspect-video object-cover'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default About
