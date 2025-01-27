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
                className={`sm:py-4 sm:px-6 py-1 px-3 shadow-lg text-xl md::text-2xl text-white font-semibold  border-2 rounded-full sm:hover:bg-transparent duration-200 group ${className}`}
                aria-label={'Tlačítko:' + text}
            >
                <Link
                    href={link}
                    className='gap-2 group-hover:text-white sm:group-hover:text-black'
                >
                    {text}
                </Link>
            </button>
        )

    if (variant === 'stroke')
        return (
            <button
                className={`sm:py-4 sm:px-6 py-1 px-3 shadow-lg text-xl text-white font-semibold border-2 rounded-full sm:hover:text-black bg-transparent duration-200 group ${className}`}
                aria-label={'Tlačítko:' + text}
            >
                <Link
                    href={link}
                    className='gap-2 text-black sm:group-hover:text-white'
                >
                    {text}
                </Link>
            </button>
        )
}

export default Button
