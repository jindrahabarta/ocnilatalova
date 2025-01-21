import React from 'react'
import Image from 'next/image'

const OpeningTable = () => {
    return (
        <section id='oteviraci-doba' className='container'>
            <div className='flex flex-col md:flex-row gap-10 mt-20'>
                <div className='flex-1'>
                    <h2>Otevírací doba</h2>
                    <table className='w-full mt-4 text-xl'>
                        <tbody>
                            <tr>
                                <td className='border border-black p-1'>
                                    Pondělí
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    8:00-15:00
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Úterý
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    8:00-15:00
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Středa
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    8:00-15:00
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Čtvrtek
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    8:00-15:00
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Pátek
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    8:00-15:00
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-black p-1'>
                                    Sobota, Neděle
                                </td>
                                <td className='border border-black p-1 text-center'>
                                    Zavřeno
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex-1'>
                    <Image
                        src={
                            'https://lh3.googleusercontent.com/p/AF1QipNnX147DIcF0sKNynQkQnrJmh0xQ04rO_pxXYwq=s1360-w1360-h1020'
                        }
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
