import Link from 'next/link'
import React from 'react'

interface props {
    link: string
    icon: React.JSX.Element
    color: string
    path: string
}

const NavLink = ({ link, icon, color, path }: props) => {
    return (
        <li className='border border-b-0 border-t-0 border-black/10 relative group box-content flex items-center'>
            <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-${color} ${
                    link === '/' + path.split('/')[1] && 'h-full'
                } group-hover:h-full duration-200`}
            ></span>

            <Link
                href={link}
                className={`flex h-full items-center p-4 gap-2  group-hover:text-white relative ${
                    link === '/' + path.split('/')[1] && 'text-white'
                }`}
            >
                {icon}
            </Link>
        </li>
    )
}

export default NavLink
