import React from 'react'
import Button from '../Buttons/Button'

const MobileNav = () => {
    return (
        <aside
            id='mobileNav'
            className='opacity-0 pointer-events-none bg-white select-none absolute h-[100lvh] w-screen  flex-col justify-between items-center top-0 pt-32 pb-4'
        >
            <ul>
                <li>sldf</li>
                <li>sldf</li>
                <li>sldf</li>
            </ul>

            <Button text={'+420 585 227 940'} link={'/'}></Button>
        </aside>
    )
}

export default MobileNav
