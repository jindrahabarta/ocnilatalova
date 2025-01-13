import React from 'react'
import ServiceBox from './ServiceBox'

// const ServicesList = [
//     {
//         name: 'Service1',
//         text: 'lorem ipsum',
//         image: <PhoneIcon></PhoneIcon>,
//     },
// ]

const Services = () => {
    return (
        <section className='container'>
            <h1>Naše služby</h1>

            <div className='mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <ServiceBox
                    title={'Oční\nordinace'}
                    icon='http://www.ocnilatalova.cz/img/logo.png'
                    className='bg-green'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Oční\noptika'}
                    icon='http://www.ortoptikaolomouc.cz/ocnioptikaram.jpg'
                    className='bg-blue'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Zrakový\nterapeut'}
                    icon='http://www.ortoptikaolomouc.cz/zrakovyterapeutram.jpg'
                    className='bg-orange'
                    link=''
                ></ServiceBox>
                <ServiceBox
                    title={'Ortoptika'}
                    icon='http://www.optikaolomouc.cz/ortoptikaram.jpg'
                    className='bg-violet'
                    link=''
                ></ServiceBox>
            </div>
        </section>
    )
}

export default Services
