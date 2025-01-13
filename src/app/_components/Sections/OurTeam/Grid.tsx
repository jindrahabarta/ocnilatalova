import React from 'react'
import TeamMember from './TeamMember'

const Grid = () => {
    return (
        <div className=' mt-12 grid grid-cols-3 gap-8'>
            <TeamMember
                name={'MUDr. Olga Látalová'}
                role={'Vedoucí lékař'}
                quote={'Nějaká větička'}
            ></TeamMember>
            <TeamMember
                name={'MUDr. Olga Látalová ml.'}
                role={'lékař'}
                quote={'Nějaká větička'}
            ></TeamMember>
            <TeamMember
                name={'Věra Šimoníková'}
                role={'Vedoucí sestra'}
                quote={'Nějaká větička'}
            ></TeamMember>
            <TeamMember
                name={'Alena Fadgyasová'}
                role={'Administrativní pracovník'}
                quote={'Nějaká větička'}
            ></TeamMember>
        </div>
    )
}

export default Grid
