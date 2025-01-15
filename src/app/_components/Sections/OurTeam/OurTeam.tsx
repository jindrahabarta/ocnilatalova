import React from 'react'
import Grid from './Grid'

const OurTeam = () => {
    return (
        <section className='relative overflow-hidden'>
            <section className='w-full h-20 bg-gradient-to-t from-blue/10 to-green/0'></section>
            <div className='bg-blue/10 pt-20 pb-20 relative'>
                <div className='container'>
                    <h1 className='text-center'>Náš tým</h1>
                    <h2 className='text-center italic text-gray-600 text-lg mt-2'>
                        &#34; Postaráme se o váš zrak &#34;
                    </h2>

                    <Grid></Grid>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
