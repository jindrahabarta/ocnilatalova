import React from 'react'
import Image, { StaticImageData } from 'next/image'

const Pristroj = ({
    title,
    children,
    image,
    reverse,
}: {
    title: string
    children: React.JSX.Element
    image: StaticImageData
    reverse?: boolean
}) => {
    return (
        <div
            className={`py-6 flex gap-4 lg:gap-10 ${
                reverse
                    ? 'lg:flex-row-reverse flex-col'
                    : 'lg:flex-row flex-col'
            }`}
        >
            <div className=''>
                <h3 className='py-2 '>{title}</h3>

                {children}
            </div>

            <Image
                src={image}
                alt={'Obrázek ' + title}
                width={800}
                height={800}
                className='rounded-2xl mt-4 max-w-xl w-full aspect-video object-cover'
            ></Image>
        </div>
    )
}

export default Pristroj
