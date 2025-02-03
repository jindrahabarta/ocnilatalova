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

import OptikaIcon from '../../images/Loga/OptikaIcon'
import OrtOptikaIcon from '../../images/Loga/OrtOptikaIcon'
import OcniOrdinaceIcon from '../../images/Loga/OcniOrdinaceIcon'
import ZrakovyTerapeutIcon from '../../images/Loga/ZrakovyTerapeutIcon'
import OcniOrdinaceOctIcon from '../../images/Loga/OcniOrdinaceOctIcon'

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
            className='fixed z-50 top-0 left-0 w-screen bg-white shadow-lg border-b translate-y-0 border-black/30'
        >
            <MobileNav handleCloseMenu={openMenu}></MobileNav>

            <nav className='container pr-0 sm:pr-2 flex items-center justify-between bg-white relative'>
                <div className='py-2'>
                    <Link href={'/'}>
                        <OcniOrdinaceIcon
                            className={'w-40 sm:w-32 md:w-40 text-black'}
                        ></OcniOrdinaceIcon>
                    </Link>
                </div>

                <div className='flex gap-2 sm:gap-6 items-center'>
                    <ul className='hidden sm:flex  '>
                        <NavLink
                            link={'/ocni-ordinace'}
                            icon={
                                <OcniOrdinaceOctIcon className='w-24 md:w-32 lg:w-40 hover:text-white duration-200'></OcniOrdinaceOctIcon>
                            }
                            path={path}
                            color={'green'}
                        ></NavLink>
                        <NavLink
                            link={'/ocni-optika'}
                            icon={
                                <OptikaIcon className='w-24 lg:w-40 md:w-32 hover:text-white duration-200'></OptikaIcon>
                            }
                            path={path}
                            color={'blue'}
                        ></NavLink>
                        <NavLink
                            link={'/zrakovy-terapeut'}
                            icon={
                                <ZrakovyTerapeutIcon className='w-24 md:w-32 lg:w-40 hover:text-white duration-200'></ZrakovyTerapeutIcon>
                            }
                            path={path}
                            color={'orange'}
                        ></NavLink>
                        <NavLink
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
