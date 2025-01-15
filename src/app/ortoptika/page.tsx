import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Ortoptika',
    description: 'Oční optika olomouc',
}

const Ortoptika = () => {
    return (
        <div className='w-full flex flex-col gap-20 pt-32 container'>
            <h1>Ortoptika</h1>
        </div>
    )
}

export default Ortoptika
