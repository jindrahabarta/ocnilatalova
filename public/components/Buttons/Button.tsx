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
            <Link
                href={link}
                className={`py-4 px-6  shadow-lg text-2xl text-white font-semibold  border-2 rounded-full sm:hover:bg-transparent duration-200 group ${className}`}
            >
                <p className='gap-2 group-hover:text-white sm:group-hover:text-black'>
                    {text}
                </p>
            </Link>
        )

    if (variant === 'stroke')
        return (
            <Link
                className={`py-4 px-6  shadow-lg text-xl text-white font-semibold border-2 rounded-full sm:hover:text-black bg-transparent duration-200 group ${className}`}
                href={link}
            >
                <p className='gap-2 text-black sm:group-hover:text-white'>
                    {text}
                </p>
            </Link>
        )
}

export default Button
