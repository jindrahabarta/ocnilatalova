import Link from 'next/link'
import React from 'react'

const Button = ({
    text,
    link,
    className,
    variant,
}: {
    text: string
    link: string
    className?: string
    variant?: string
}) => {
    if (variant === 'filled' || !variant)
        return (
            <button
                className={`py-2 px-6 shadow-lg text-2xl text-white font-semibold  bg-blue border-2 border-blue rounded-full hover:bg-transparent duration-200 group ${className}`}
                aria-label={'Tlačítko:' + text}
            >
                <Link href={link} className='gap-2 group-hover:text-black'>
                    {text}
                </Link>
            </button>
        )

    if (variant === 'stroke')
        return (
            <button
                className={`py-2 px-6 shadow-lg text-2xl text-white font-semibold border-2 border-blue rounded-full hover:text-black bg-transparent hover:bg-blue duration-200 group ${className}`}
                aria-label={'Tlačítko:' + text}
            >
                <Link
                    href={link}
                    className='gap-2 text-black group-hover:text-white'
                >
                    {text}
                </Link>
            </button>
        )
}

export default Button
