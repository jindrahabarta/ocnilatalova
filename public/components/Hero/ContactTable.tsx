import Link from 'next/link'
import React from 'react'
import PhoneIcon from '../Icons/PhoneIcon'
import OldPhoneIcon from '../Icons/OldPhoneIcon'
import MapPinIcon from '../Icons/MapPinIcon'

const ContactTable = ({ color }: { color: string }) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 border-black/20 border shadow-md p-4 sm:p-8 bg-slate-50 font-bold'>
            <div className='group'>
                <Link
                    href={'phone:585227940'}
                    className={`flex flex-row flex-wrap sm:flex-col md:flex-row  justify-center items-center gap-2 lg:gap-4 ${color} duration-200`}
                >
                    <div className='h-10 flex items-center sm:group-hover:pb-2 duration-200'>
                        <PhoneIcon className='w-6 sm:w-8'></PhoneIcon>
                    </div>
                    <p className='text-center duration-200 text-base sm:text-lg'>
                        Tel: +420 585 227 940
                    </p>
                </Link>
            </div>
            <div className='group'>
                <Link
                    href={'phone:736713589'}
                    className={`flex flex-row flex-wrap sm:flex-col md:flex-row justify-center items-center gap-2 lg:gap-4 ${color} duration-200`}
                >
                    <div className='h-10 flex items-center sm:group-hover:pb-2 duration-200'>
                        <OldPhoneIcon className='w-6 sm:w-8'></OldPhoneIcon>
                    </div>
                    <p className='text-center duration-200 text-base sm:text-lg'>
                        Mob: +420 736 713 589
                    </p>
                </Link>
            </div>
            <div className='group'>
                <Link
                    href={'/'}
                    className={`flex flex-row flex-wrap sm:flex-col md:flex-row  justify-center items-center gap-2 lg:gap-4 ${color} duration-200`}
                >
                    <div className='h-10 flex items-center sm:group-hover:pb-2 duration-200'>
                        <MapPinIcon className='w-6 sm:w-8'></MapPinIcon>
                    </div>
                    <p className='text-center duration-200 text-base sm:text-lg'>
                        Kavaléristů 10 779 00 Olomouc
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ContactTable
