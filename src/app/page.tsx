import { Metadata } from 'next'
import Hero from './_components/Sections/Hero/Hero'
import Services from './_components/Sections/Services/Services'
import OurTeam from '../../public/components/Global/OurTeam'
import About from './_components/Sections/About/About'

export const metadata: Metadata = {
    title: 'Úvod | Oční Látalová Olomouc',
    description: 'Oční optika olomouc',
}

export default function Home() {
    return (
        <div className='w-full flex flex-col gap-20'>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <OurTeam
                className='md:grid-cols-4 grid-cols-2'
                background={{
                    transition: 'from-blue/10 to-transparent',
                    bg: 'bg-blue/10',
                }}
                team={[
                    {
                        name: 'MUDr. Olga Látalová',
                        role: 'Vedoucí lékař',
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                    },
                    {
                        name: 'MUDr. Olga Floder',
                        role: 'Lékař',
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                    },
                    {
                        name: 'Věra Šimoníková',
                        role: 'Vedoucí sestra',
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                    },
                    {
                        name: 'Alena Fadgyasová',
                        role: 'Administrativní pracovník',
                        quote: 'Nějaká větička',
                        image: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                    },
                ]}
                title={'Náš tým'}
                title2={'Postaráme se o váš zrak'}
            ></OurTeam>
        </div>
    )
}
