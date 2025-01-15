import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Zrakový terapeut',
    description: 'Oční optika olomouc',
}

const ZrakovyTerapeut = () => {
    return (
        <div className='w-full flex flex-col gap-20 pt-32 container'>
            <h1>Zrakový terapeut</h1>
        </div>
    )
}

export default ZrakovyTerapeut
