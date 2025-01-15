import React from 'react'
import Link from 'next/link'

const ServiceBox = ({
    title,
    icon,
    className,
    link,
}: {
    title: string
    icon: React.JSX.Element
    className?: string
    link: string
}) => {
    return (
        <Link
            href={link}
            className={`${className} p-8 border rounded-lg border-black/20 shadow-md relative overflow-hidden bg-opacity-0 hover:bg-opacity-0 duration-200 group `}
        >
            <div
                className={`${className} absolute w-full bottom-0 left-0 h-2 group-hover:h-full duration-200 ease-in-out `}
            ></div>

            <div className='h-36 flex justify-center relative'>
                {/* <Image
                    src={icon}
                    alt={'ikona: ' + title}
                    width={300}
                    height={300}
                ></Image> */}
                {icon}
            </div>
            <h2 className='mt-8 text-3xl relative group-hover:text-white duration-200 whitespace-pre-line'>
                {title}
            </h2>
            {/* <Image
                src={OkoIco}
                alt='ikona'
                width={200}
                height={200}
                className='absolute -bottom-5 -right-10 opacity-50 w-36'
            ></Image> */}
        </Link>
    )
}

export default ServiceBox
