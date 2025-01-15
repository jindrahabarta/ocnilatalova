import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Oční optika',
    description: 'Oční optika olomouc',
}

const OcniOptika = () => {
    return (
        <div className='w-full flex flex-col gap-20 pt-32 container'>
            <h1>Oční optika</h1>
        </div>
    )
}

export default OcniOptika
