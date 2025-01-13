'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import gsapInit from '../../animations/gsapInit'
import IconButton from '../Buttons/IconButton'
import Link from 'next/link'
import HamburgerIcon from './HamburgerIcon'
import MobileNav from './MobileNav'

import PhoneIcon from '../Icons/PhoneIcon'
import NavLink from './NavLink'

import GlassImage from '@/../public/images/Navigation/ortoptikaram.jpg'
import ZrakovyTerapeut from '@/../public/images/Navigation/zrakovyterapeutram.png'
import OcniOptika from '@/../public/images/Navigation/ocnioptikaram.png'
import OcniOrdinace from '@/../public/images/Navigation/ocniordinaceram.jpg'

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
            <MobileNav></MobileNav>

            <nav className='container flex items-center justify-between bg-white relative'>
                <div>
                    <Link href={'/'}>Logo</Link>
                </div>

                <div className='flex gap-2 sm:gap-6 items-center'>
                    <ul className='hidden sm:flex items-center '>
                        <NavLink
                            text={'Oční ordinace'}
                            link={'/'}
                            img={OcniOrdinace}
                            color={'green'}
                        ></NavLink>
                        <NavLink
                            text={'Oční optika'}
                            link={'/'}
                            img={OcniOptika}
                            color={'blue'}
                        ></NavLink>
                        <NavLink
                            text={'Zrakový terapeut'}
                            link={'/'}
                            img={ZrakovyTerapeut}
                            color={'orange'}
                        ></NavLink>
                        <NavLink
                            text={'Ortoptika'}
                            link={'/'}
                            img={GlassImage}
                            color={'violet'}
                        ></NavLink>
                    </ul>
                    <IconButton text={'+420 585 227 940'} link={'/'}>
                        <PhoneIcon
                            strokeWidth='2'
                            className='w-5 sm:w-6 stroke-white sm:group-hover:stroke-green duration-200'
                        ></PhoneIcon>
                    </IconButton>

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
