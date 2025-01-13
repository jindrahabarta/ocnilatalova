import React from 'react'
import Image from 'next/image'

interface props {
    name: string
    role: string
    quote: string
}

const TeamMember = ({ name, role, quote }: props) => {
    return (
        <div className='flex flex-col items-center group'>
            <div className='w-32 h-32 rounded-full overflow-hidden'>
                <Image
                    src={
                        'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
                    }
                    alt={'Člen týmu'}
                    width={300}
                    height={300}
                    className=' object-cover w-full h-full group-hover:scale-105 duration-200'
                ></Image>
            </div>

            <div className='mt-4'>
                <h3 className='text-xl text-center'>{name}</h3>
                <p className='text-sm text-gray-600 text-center'>{role}</p>
            </div>
            <p className='mt-2 text-base text-gray-600 italic'>
                &#34; {quote} &#34;
            </p>
        </div>
    )
}

export default TeamMember
