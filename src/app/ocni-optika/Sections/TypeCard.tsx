import React from 'react'

interface props {
    title: string
    description: string

    pros: string[]
    cons: string[]
}

const TypeCard = ({ title, description, pros, cons }: props) => {
    return (
        <div className='border-black/20 border bg-white/50 rounded-xl p-6 shadow-md'>
            <h3>{title}</h3>
            <p className='mt-2'>{description}</p>

            <h4 className='mt-4'>Výhody</h4>

            <ul className='text-green500 mt-2'>
                {pros.map((item, i) => (
                    <li key={'Pro ' + i} className='mt-1'>
                        + {item}
                    </li>
                ))}
            </ul>

            <h4 className='mt-4'>Nevýhody</h4>
            <ul className='mt-2 text-red-600'>
                {cons.map((item, i) => (
                    <li key={'Pro ' + i} className='mt-1'>
                        - {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TypeCard
