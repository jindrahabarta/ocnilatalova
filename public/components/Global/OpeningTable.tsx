import React from 'react'
import Link from 'next/link'
import PhoneIcon from '../Icons/PhoneIcon'
import OldPhoneIcon from '../Icons/OldPhoneIcon'
import MailIcon from '../Icons/MailIcon'
import MapPinIcon from '../Icons/MapPinIcon'

interface props {
    className?: string
    contactClassName: string
    table: {
        mon: string
        tue: string
        wed: string
        thu: string
        fri: string
        sut: string
        sun: string
    }
}

const OpeningTable = ({ table, className, contactClassName }: props) => {
    return (
        <section id='oteviraci-doba' className='container'>
            <div className='flex flex-col md:flex-row gap-20 mt-20'>
                <div className='flex-1'>
                    <h2>Otevírací doba</h2>
                    <table className='w-full mt-8 text-xl'>
                        <tbody>
                            <tr className={className}>
                                <td className='border border-black p-1'>
                                    Pondělí
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.mon}
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Úterý
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.tue}
                                </td>
                            </tr>
                            <tr className={className}>
                                <td className='border border-black p-1'>
                                    Středa
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.wed}
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Čtvrtek
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.thu}
                                </td>
                            </tr>
                            <tr className={className}>
                                <td className='border border-black p-1'>
                                    Pátek
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.fri}
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Sobota
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.sut}
                                </td>
                            </tr>
                            <tr className={className}>
                                <td className='border border-black p-1'>
                                    Neděle
                                </td>
                                <td className='border border-black p-1 text-center font-semibold'>
                                    {table.sun}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex-1'>
                    <h2>Kontakt</h2>

                    <ul className='mt-8'>
                        <li className=''>
                            <Link
                                href={'/'}
                                className='flex items-center gap-2 group'
                            >
                                <PhoneIcon
                                    className={`w-8 duration-100 ${contactClassName}`}
                                ></PhoneIcon>

                                <span
                                    className={`text-lg font-semibold duration-100 ${contactClassName}`}
                                >
                                    Tel: 585 243 398
                                </span>
                            </Link>
                        </li>
                        <li className='mt-4'>
                            <Link
                                href={'/'}
                                className='flex items-center gap-2 group'
                            >
                                <OldPhoneIcon
                                    className={`w-8 duration-100 ${contactClassName}`}
                                ></OldPhoneIcon>

                                <span
                                    className={`text-lg font-semibold duration-100 ${contactClassName}`}
                                >
                                    Mob: 739 644 230
                                </span>
                            </Link>
                        </li>
                        <li className='mt-4'>
                            <Link
                                href={'/'}
                                className='flex items-center gap-2 group'
                            >
                                <MailIcon
                                    className={`w-8 duration-100 ${contactClassName}`}
                                ></MailIcon>

                                <span
                                    className={`text-lg font-semibold duration-100 ${contactClassName}`}
                                >
                                    info@optikaolomouc.cz
                                </span>
                            </Link>
                        </li>

                        <li className='mt-4'>
                            <Link
                                href={'/'}
                                className='flex items-center gap-2 group'
                            >
                                <MapPinIcon
                                    className={`w-8 duration-100 ${contactClassName}`}
                                ></MapPinIcon>

                                <span
                                    className={`text-lg font-semibold duration-100 ${contactClassName}`}
                                >
                                    Kavaléristů 10, 779 00 Olomouc
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* <Image
                        src={img}
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl aspect-video object-cover'
                    ></Image> */}
                </div>
            </div>
        </section>
    )
}

export default OpeningTable
