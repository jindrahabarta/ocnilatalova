import React from 'react'
import Button from '../Buttons/Button'
import MobileNavLink from './MobileNavLink'

const MobileNav = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {
    return (
        <aside
            id='mobileNav'
            className='opacity-0 pointer-events-none block sm:!hidden bg-white select-none absolute h-[100dvh] w-screen  flex-col justify-between items-center top-0 pt-32 pb-4'
        >
            <ul>
                <MobileNavLink
                    handleClose={handleCloseMenu}
                    text={'Domů'}
                    link={'/'}
                ></MobileNavLink>
                <MobileNavLink
                    handleClose={handleCloseMenu}
                    text={'Oční ordinace'}
                    link={'/ocni-ordinace'}
                ></MobileNavLink>
                <MobileNavLink
                    handleClose={handleCloseMenu}
                    text={'Oční optika'}
                    link={'/ocni-optika'}
                ></MobileNavLink>
                <MobileNavLink
                    handleClose={handleCloseMenu}
                    text={'Zrakový terapeut'}
                    link={'/zrakovy-terapeut'}
                ></MobileNavLink>
                <MobileNavLink
                    handleClose={handleCloseMenu}
                    text={'Ortoptika'}
                    link={'/ortoptika'}
                ></MobileNavLink>
            </ul>

            <Button
                className='select-none bg-blue border-blue'
                text={'+420 585 227 940'}
                link={'tel:585227940'}
            ></Button>
        </aside>
    )
}

export default MobileNav
