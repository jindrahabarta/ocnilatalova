import { Metadata } from 'next'
import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import OurTeam from '../_components/Sections/OurTeam/OurTeam'
import Services from './Sections/Services'
import OpeningTable from './Sections/OpeningTable'

export const metadata: Metadata = {
    title: 'Oční ordinace',
    description: 'Oční optika olomouc',
}

const OcniOrdinace = () => {
    return (
        <div className='w-full flex flex-col'>
            <Hero></Hero>
            {/* 
            <p>
                V našem specializovaném lékařském pracovišti poskytujeme tyto
                služby: • vyšetření na OCT přístroji více informací zde •
                vyšetření, sledování a léčba pacientů s očním onemocněním
                (katarakta, glaukom, záněty, refrakční vady a jiné), preventivní
                kontrolní vyšetření u pacientů s rizikem vzniku očního
                onemocnění, vyšetření u indikovaných pacientů se systémovým
                onemocněním (pacienti s cukrovkou, vysokým krevním tlakem, s
                endokrinní či autoimunitní chorobou a jinými) • ortoptika -
                zabývá se poruchami zrakových funkcí spojených se změnami
                postavení očí (tj. šilháním-strabismem) a tupozrakostí
                (amblyopií),poruchy prostorových funkcí (binokularita) -
                diagnostika těchto poruch, terapie pomocí komplexních
                pleopticko-ortoptických cvičení • práce se zrakově postiženými •
                kontaktologie – kontaktní čočky • zraková edukace Úzce
                spolupracujeme s praktickými lékaři i se specializovanými lékaři
                z jiných oborů, našim pacientům je takto zajištěn komplexní
                přístup v diagnostice a léčbě jejich onemocnění .
            </p> */}

            <About></About>

            <OurTeam></OurTeam>
            <Services></Services>
            <OpeningTable></OpeningTable>
        </div>
    )
}

export default OcniOrdinace
