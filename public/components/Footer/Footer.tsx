import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const year = new Date()

    return (
        <footer className='mt-20'>
            <div className='container flex flex-wrap flex-col sm:flex-row justify-between gap-10  pb-4'>
                <div className='flex flex-col justify-between'>
                    <Link href={'/'} className='w-fit'>
                        <Image
                            src={'http://www.ocnilatalova.cz/img/logo.png'}
                            alt='logo'
                            width={150}
                            height={100}
                            className='w-40'
                        ></Image>
                    </Link>

                    <ul>
                        <li>
                            Tel:{' '}
                            <Link
                                className='font-semibold'
                                href={'tel:+420585227940'}
                            >
                                +420 585 227 940
                            </Link>
                        </li>
                        <li>
                            Mob:{' '}
                            <Link
                                className='font-semibold'
                                href={'tel:+420736713589'}
                            >
                                +420 736 713 589
                            </Link>
                        </li>
                        <li className='mt-2'>
                            Adresa:{' '}
                            <Link
                                className='font-semibold'
                                href={
                                    'https://www.google.com/maps/place/O%C4%8Dn%C3%AD+Ordinace+Mudr.+L%C3%A1talov%C3%A1/@49.593327,17.2676469,17z/data=!3m2!4b1!5s0x47124e860aa1dc3b:0x685291c7c7be5534!4m6!3m5!1s0x47124e85e04088df:0x95f71ad95183c247!8m2!3d49.5933236!4d17.2702218!16s%2Fg%2F11fy7gxjkw?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
                                }
                                target='_blank'
                            >
                                Kavaléristů 10 779 00 Olomouc
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Menu</h3>
                    <ul className='mt-4'>
                        <li className='font-medium text-lg'>
                            <Link href={'/'}>Domů</Link>
                        </li>
                        <li className='font-medium text-lg'>
                            <Link href={'/'}>Ordinace</Link>
                        </li>
                        <li className='font-medium text-lg'>
                            <Link href={'/'}>Zrakový terapeut</Link>
                        </li>
                        <li className='font-medium text-lg'>
                            <Link href={'/'}>Oční optika</Link>
                        </li>
                        <li className='font-medium text-lg'>
                            <Link href={'/'}>Ortoptika</Link>
                        </li>
                    </ul>
                </div>
                <div className=' flex flex-col'>
                    <h3>Kde nás najdete</h3>

                    <div className='rounded-2xl overflow-hidden mt-4 flex-1'>
                        <iframe
                            className='h-56 sm:h-fit'
                            width='100%'
                            height='100%'
                            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kaval%C3%A9rist%C5%AF%201260,%20779%2000%20Olomouc%209-Hodolany+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='h-[1px] w-full bg-black/10 rounded-full'></div>
            </div>
            <div className='container py-2 flex flex-col items-center sm:flex-row justify-between'>
                <p className='text-sm'>
                    © {year.getFullYear()} |{' '}
                    <Link href={'/'}>ocnilatalova.cz</Link>
                </p>
                <p className='text-sm'>
                    Web vytvořilo studio <Link href={'/'}>Motion Labs</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer
