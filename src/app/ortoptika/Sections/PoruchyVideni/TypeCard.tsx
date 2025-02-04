import React from 'react'

interface props {
    number: number
    title: string
    description: string
}

const TypeCard = ({ title, description, number }: props) => {
    return (
        <div className='flex gap-4 border-black/20 border bg-white/50 rounded-xl p-6 shadow-md opacity-0 md:translate-y-16 staggerAnimationPart'>
            <div className='text-[3rem] sm:text-[4rem] leading-[1em] font-bold text-violet/30'>
                {number}.
            </div>
            <div className='flex-1'>
                <h3>{title}</h3>
                <p className='mt-2 w-full'>{description}</p>
            </div>
        </div>
    )
}

export default TypeCard
