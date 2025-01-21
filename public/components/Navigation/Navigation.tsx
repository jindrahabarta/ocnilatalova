'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import gsapInit from '../../animations/gsapInit'
// import IconButton from '../Buttons/IconButton'
import Link from 'next/link'
import HamburgerIcon from './HamburgerIcon'
import MobileNav from './MobileNav'

// import PhoneIcon from '../Icons/PhoneIcon'
import NavLink from './NavLink'

import OptikaIcon from '../../images/Logo/OptikaIcon'
import OrtOptikaIcon from '../../images/Logo/OrtOptikaIcon'
import OcniOrdinaceIcon from '../../images/Logo/OcniOrdinaceIcon'
import ZrakovyTerapeutIcon from '../../images/Logo/ZrakovyTerapeutIcon'

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false)
    const path = usePathname()

    useEffect(() => {
        gsapInit(path)
    }, [path])

    const openMenu = () => {
        setIsOpened((prev) => !prev)

        document.body.classList.toggle('scrollDeny')

        document.getElementById('mobileNav')?.classList.toggle('showMobileNav')
    }

    return (
        <header
            id='navigation'
            className='fixed z-50 top-0 left-0 w-screen bg-white shadow-lg border-b border-black/30'
        >
            <MobileNav handleCloseMenu={openMenu}></MobileNav>

            <nav className='container pr-0 sm:pr-2 flex items-center justify-between bg-white relative'>
                <div className='py-2'>
                    <Link href={'/'}>
                        <p className='text-base sm:text-lg'>Oční centrum</p>
                        <p className='text-2xl sm:text-3xl font-bold'>
                            Látalová
                        </p>
                    </Link>
                </div>

                <div className='flex gap-2 sm:gap-6 items-center'>
                    <ul className='hidden sm:flex  '>
                        <NavLink
                            text={'Oční ordinace'}
                            link={'/ocni-ordinace'}
                            icon={
                                <OcniOrdinaceIcon className='w-24 md:w-32 lg:w-40 hover:text-white duration-200'></OcniOrdinaceIcon>
                            }
                            path={path}
                            color={'green'}
                        ></NavLink>
                        <NavLink
                            text={'Oční optika'}
                            link={'/ocni-optika'}
                            icon={
                                <OptikaIcon className='w-24 lg:w-40 md:w-32 hover:text-white duration-200'></OptikaIcon>
                            }
                            path={path}
                            color={'blue'}
                        ></NavLink>
                        <NavLink
                            text={'Zrakový terapeut'}
                            link={'/zrakovy-terapeut'}
                            icon={
                                <ZrakovyTerapeutIcon className='w-24 md:w-32 lg:w-40 hover:text-white duration-200'></ZrakovyTerapeutIcon>
                            }
                            path={path}
                            color={'orange'}
                        ></NavLink>
                        <NavLink
                            text={'Ortoptika'}
                            link={'/ortoptika'}
                            icon={
                                <OrtOptikaIcon className='w-16 md:w-20 lg:w-24 hover:text-white duration-200'></OrtOptikaIcon>
                            }
                            path={path}
                            color={'violet'}
                        ></NavLink>
                    </ul>
                    {/* <IconButton text={'+420 585 227 940'} link={'/'}>
                        <PhoneIcon
                            strokeWidth='2'
                            className='w-5 sm:w-6 stroke-white sm:group-hover:stroke-green duration-200'
                        ></PhoneIcon>
                    </IconButton> */}

                    <HamburgerIcon
                        handleClick={openMenu}
                        isOpened={isOpened}
                    ></HamburgerIcon>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
