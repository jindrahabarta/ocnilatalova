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
    background: {
        transition: string
        bg: string
    }
}

const OurTeam = ({ team, title, title2, className, background }: props) => {
    return (
        <section className='relative overflow-hidden'>
            <section
                className={`w-full h-20 bg-gradient-to-t ${background.transition}`}
            ></section>
            <div className={`${background.bg} pt-20 pb-20 relative`}>
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
            <section
                className={`w-full h-20 bg-gradient-to-b ${background.transition}`}
            ></section>
        </section>
    )
}

export default OurTeam
