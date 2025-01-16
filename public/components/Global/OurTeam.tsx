import React from 'react'
import TeamMember from './TeamMember'

type TeamMember = {
    name: string
    quote: string
    role: string
    image: string
}

interface props {
    team: TeamMember[]
    title: string
    title2: string
    className: string
}

const OurTeam = ({ team, title, title2, className }: props) => {
    return (
        <section className='relative overflow-hidden'>
            <section
                className={`w-full h-20 bg-gradient-to-t from-blue/10 to-transparent`}
            ></section>
            <div className='bg-blue/10 pt-20 pb-20 relative'>
                <div className='container'>
                    <h1 className='text-center'>{title}</h1>
                    <h2 className='text-center italic text-gray-600 text-lg mt-2'>
                        &#34; {title2} &#34;
                    </h2>

                    <div className={`mt-20 grid gap-8 ${className}`}>
                        {team.map((member) => (
                            <React.Fragment key={member.name}>
                                <TeamMember
                                    name={member.name}
                                    role={member.role}
                                    quote={member.quote}
                                    image={member.image}
                                ></TeamMember>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
