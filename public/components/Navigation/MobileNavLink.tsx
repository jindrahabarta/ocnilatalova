import Link from 'next/link'
import React from 'react'

const MobileNavLink = ({
    text,
    link,
    handleClose,
}: {
    text: string
    link: string
    handleClose: () => void
}) => {
    return (
        <li className='select-none' onClick={handleClose}>
            <Link href={link} className='font-bold text-2xl py-1 block'>
                {text}
            </Link>
        </li>
    )
}

export default MobileNavLink
