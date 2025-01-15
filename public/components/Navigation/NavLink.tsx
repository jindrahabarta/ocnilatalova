import Link from 'next/link'
import React from 'react'

interface props {
    text: string
    link: string
    icon: React.JSX.Element
    color: string
    path: string
}

const NavLink = ({ text, link, icon, color, path }: props) => {
    return (
        <li className='border border-b-0 border-t-0 border-black/10 relative group box-content flex items-center'>
            <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-${color} ${
                    link === path && 'h-full'
                } group-hover:h-full duration-200`}
            ></span>

            <Link
                href={link}
                className={`flex flex-col items-center p-4 gap-2  group-hover:text-white relative ${
                    link === path && 'text-white'
                }`}
            >
                {icon}
                {/* <Image
                    src={img}
                    alt={'img'}
                    width={200}
                    height={200}
                    className='h-6 w-auto'
                ></Image> */}
                {/* <p className='font-semibold relative'>{text}</p> */}
            </Link>
        </li>
    )
}

export default NavLink
