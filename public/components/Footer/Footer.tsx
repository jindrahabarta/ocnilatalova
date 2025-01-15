import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const year = new Date()

    return (
        <footer className='mt-20'>
            <div className='container flex flex-col sm:flex-row justify-between gap-10 sm:gap-2 pb-4'>
                <div className='flex flex-col justify-between'>
                    <div>
                        <Link href={'/'}>
                            <Image
                                src={'http://www.ocnilatalova.cz/img/logo.png'}
                                alt='logo'
                                width={150}
                                height={100}
                            ></Image>
                        </Link>
                        <h3 className='text-lg mt-2'>Oční klinika Látalová</h3>
                    </div>
                    <ul>
                        <li>
                            Tel:{' '}
                            <Link href={'tel:+420585227940'}>
                                +420 585 227 940
                            </Link>
                        </li>
                        <li>
                            Mob:{' '}
                            <Link href={'tel:+420736713589'}>
                                +420 736 713 589
                            </Link>
                        </li>
                        <li className='mt-2'>
                            Adresa: Kavaléristů 10 779 00 Olomouc
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
            <div className='container py-2 flex justify-between'>
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
