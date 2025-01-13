import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface props {
    text: string
    link: string
    img: StaticImageData
    color: string
}

const NavLink = ({ text, link, img, color }: props) => {
    return (
        <li className='border border-b-0 border-t-0 border-black/10 relative group box-content'>
            <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-${color} group-hover:h-full duration-200`}
            ></span>

            <Link
                href={link}
                className='flex flex-col items-center p-2 pb-1 gap-2 group-hover:text-white relative'
            >
                <Image
                    src={img}
                    alt={'img'}
                    width={200}
                    height={200}
                    className='h-6 w-auto'
                ></Image>
                <p className='font-semibold relative'>{text}</p>
            </Link>
        </li>
    )
}

export default NavLink
