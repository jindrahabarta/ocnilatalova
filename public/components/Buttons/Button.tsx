import Link from 'next/link'
import React from 'react'

const Button = ({
    text,
    link,
    className,
}: {
    text: string
    link: string
    className?: string
}) => {
    return (
        <button
            className={`py-2 px-6 shadow-lg text-2xl text-white font-semibold  bg-green border-2 border-green rounded-full hover:bg-transparent hover:text-black duration-200 group ${className}`}
            aria-label={'Tlačítko:' + text}
        >
            <Link href={link} className='gap-2 '>
                {text}
            </Link>
        </button>
    )
}

export default Button
