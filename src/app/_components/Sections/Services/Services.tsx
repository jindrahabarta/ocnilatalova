import React from 'react'
import ServiceBox from './ServiceBox'
import OcniOrdinaceIcon from '../../../../../public/images/Logo/OcniOrdinaceIcon'
import OrtOptikaIcon from '../../../../../public/images/Logo/OrtOptikaIcon'
import OptikaIcon from '../../../../../public/images/Logo/OptikaIcon'
import ZrakovyTerapeutIcon from '../../../../../public/images/Logo/ZrakovyTerapeutIcon'

// const ServicesList = [
//     {
//         name: 'Service1',
//         text: 'lorem ipsum',
//         image: <PhoneIcon></PhoneIcon>,
//     },
// ]

const Services = () => {
    return (
        <section id='nase-sluzby' className='container pt-20'>
            <h1>Naše služby</h1>

            <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <ServiceBox
                    title={'Oční\nordinace'}
                    icon={
                        <OcniOrdinaceIcon className='w-full group-hover:text-white'></OcniOrdinaceIcon>
                    }
                    className='bg-green'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Oční\noptika'}
                    icon={
                        <OptikaIcon className='w-full group-hover:text-white'></OptikaIcon>
                    }
                    className='bg-blue'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Zrakový\nterapeut'}
                    icon={
                        <ZrakovyTerapeutIcon className='group-hover:text-white duration-200'></ZrakovyTerapeutIcon>
                    }
                    className='bg-orange'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Ortoptika'}
                    icon={
                        <OrtOptikaIcon className='w-[80%] group-hover:text-white'></OrtOptikaIcon>
                    }
                    className='bg-violet'
                    link=''
                ></ServiceBox>
            </div>
        </section>
    )
}

export default Services
