import React from 'react'
import Link from 'next/link'

const IconButton = ({
    text,
    link,
    children,
    size,
}: {
    text: string
    link: string
    children: React.JSX.Element
    size?: string
}) => {
    if (size === 'lg' || !size)
        return (
            <button aria-label={'Tlačítko:' + text}>
                <Link
                    href={link}
                    className='flex h-12 gap-1 sm:gap-2 items-center px-4 sm:px-6 py-2 text-base sm:text-xl text-nowrap shadow-md text-white font-semibold bg-green border-2 border-green rounded-full sm:hover:bg-white sm:hover:text-black duration-200 group'
                >
                    {children}
                    {text}
                </Link>
            </button>
        )
}

export default IconButton
