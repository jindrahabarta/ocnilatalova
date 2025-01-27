import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface props {
    img: StaticImageData
    className?: string
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

const OpeningTable = ({ img, table, className }: props) => {
    return (
        <section id='oteviraci-doba' className='container'>
            <div className='flex flex-col md:flex-row gap-10 mt-20'>
                <div className='flex-1'>
                    <h2>Otevírací doba</h2>
                    <table className='w-full mt-4 text-xl'>
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
                    <Image
                        src={img}
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl aspect-video object-cover'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default OpeningTable
