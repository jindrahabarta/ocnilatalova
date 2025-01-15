import Link from 'next/link'
import React from 'react'
import PhoneIcon from '../../../../../public/components/Icons/PhoneIcon'
import MapPinIcon from '../../../../../public/components/Icons/MapPinIcon'
import OldPhoneIcon from '../../../../../public/components/Icons/OldPhoneIcon'

const ContactTable = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-2 border-black/20 border shadow-md p-4 sm:p-8 bg-slate-50 font-bold'>
            <div className='group'>
                <Link
                    href={'/'}
                    className='flex flex-row flex-wrap sm:flex-col md:flex-row  justify-center items-center gap-2 lg:gap-4 group-hover:text-blue duration-200'
                >
                    <div className='h-10 flex items-center group-hover:pb-2 duration-200'>
                        <PhoneIcon className='w-6 sm:w-8'></PhoneIcon>
                    </div>
                    <p className='text-center duration-200 text-lg'>
                        Tel: +420 585 227 940
                    </p>
                </Link>
            </div>
            <div className='group'>
                <Link
                    href={'/'}
                    className='flex flex-row flex-wrap sm:flex-col md:flex-row justify-center items-center gap-2 lg:gap-4 group-hover:text-blue duration-200'
                >
                    <div className='h-10 flex items-center group-hover:pb-2 duration-200'>
                        <OldPhoneIcon className='w-6 sm:w-8'></OldPhoneIcon>
                    </div>
                    <p className='text-center duration-200 text-lg'>
                        Mob: +420 585 227 940
                    </p>
                </Link>
            </div>
            <div className='group'>
                <Link
                    href={'/'}
                    className='flex flex-row flex-wrap sm:flex-col md:flex-row  justify-center items-center gap-2 lg:gap-4 group-hover:text-blue duration-200'
                >
                    <div className='h-10 flex items-center group-hover:pb-2 duration-200'>
                        <MapPinIcon className='w-6 sm:w-8'></MapPinIcon>
                    </div>
                    <p className='text-center duration-200 text-lg'>
                        Kavaléristů 10 779 00 Olomouc
                    </p>
                </Link>
            </div>
            {/* <div className='group'>
                <Link
                    href={'/'}
                    className='flex flex-row sm:flex-col md:flex-row flex-nowrap items-center gap-4 group-hover:text-blue'
                >
                    <div className='h-10 flex items-center group-hover:pb-2 duration-200'>
                        <OldPhoneIcon className='w-8'></OldPhoneIcon>
                    </div>
                    <p className='text-center duration-200'>
                        Mob: +420 585 227 940
                    </p>
                </Link>
            </div>
            <div className='group'>
                <Link
                    href={'/'}
                    className='flex flex-row sm:flex-col md:flex-row flex-nowrap items-center gap-4 group-hover:text-violet'
                >
                    <div className='h-10 flex items-center group-hover:pb-2 duration-200'>
                        <MapPinIcon className='w-8 '></MapPinIcon>
                    </div>
                    <p className='text-center duration-200'>
                        Kavaléristů 10 779 00 Olomouc
                    </p>
                </Link>
            </div> */}
        </div>
    )
}

export default ContactTable
