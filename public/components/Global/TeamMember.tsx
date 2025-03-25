import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface props {
    name: string
    role: string
    quote: string
    image: StaticImageData
}

const TeamMember = ({ name, role, quote, image }: props) => {
    return (
        <div className='flex flex-col items-center group'>
            <div className='w-32 h-32 rounded-full overflow-hidden'>
                <Image
                    src={image}
                    alt={'Člen týmu'}
                    width={200}
                    height={200}
                    className=' object-cover w-full h-full group-hover:scale-105 duration-200'
                ></Image>
            </div>

            <div className='mt-4'>
                <h3 className='text-xl text-center'>{name}</h3>
                <p className='text-sm text-gray-600 text-center'>{role}</p>
            </div>
            <p className='mt-2 text-base text-gray-600 italic max-w-md'>
                &#34; {quote} &#34;
            </p>
        </div>
    )
}

export default TeamMember
