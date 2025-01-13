import React from 'react'
import Grid from './Grid'

const OurTeam = () => {
    return (
        <section className='relative overflow-hidden'>
            {/* <div className='bgEffect top-0 left-0 w-1/2 absolute aspect-square'>
           
            </div> */}

            <section className='w-full h-20 bg-gradient-to-t from-green/20 to-green/0'></section>
            <div className='bg-green/20 pt-20 pb-20 relative'>
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
