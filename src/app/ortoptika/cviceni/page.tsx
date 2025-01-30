import { Metadata } from 'next'
import React from 'react'
import Pristroj from '../_components/Pristroj'

import synoptofor from '@/../public/images/OrtoptickeCviceni/synoptofor.webp'
import cheiroskop from '@/../public/images/OrtoptickeCviceni/cheiroskop.jpg'
import zrcadlovyStereosk from '@/../public/images/OrtoptickeCviceni/zrcadlovy stereoskop.jpg'
import remyhoSeparator from '@/../public/images/OrtoptickeCviceni/remyho separator.png'
import mrizka from '@/../public/images/OrtoptickeCviceni/mrizka na cteni.jpeg'

export const metadata: Metadata = {
    title: 'Ortoptické cvičení',
}

const Cviceni = () => {
    return (
        <div className='pt-32 container'>
            <h1>Ortoptické cvičení</h1>
            <p className='mt-8'>
                Ortoptika se zaměřuje na diagnostiku a terapii poruch
                binokulárního vidění, tedy spolupráce obou očí. Cvičení probíhá
                vždy s korekcí zraku – pokud dítě nosí brýle, cvičí s nimi.
                Hlavním principem ortoptických cvičení je disociace obrazů, tedy
                předložení mírně odlišného obrazu každému oku. Mozek se pak učí
                tyto obrazy správně spojit do jednoho vjemu.
            </p>

            <p className='mt-4'>
                K tomuto účelu se používají speciální přístroje, které pracují
                na principu oddělení obrazů. Každé oko dostává jiný podnět, a
                tím se posiluje jejich spolupráce. Mezi nejčastěji využívané
                přístroje patří synoptofor, cheiroskop, zrcadlový stereoskop,
                Rémyho separátor nebo mřížka na čtení.
            </p>

            <h2 className='mt-6'>Přístroje</h2>

            <Pristroj
                title={'1. Synoptofor (Troposkop, Amblyoskop)'}
                image={synoptofor}
            >
                <>
                    <p>
                        Ortoptika se zaměřuje na diagnostiku a terapii poruch
                        binokulárního vidění, tedy spolupráce obou očí. Cvičení
                        probíhá vždy s korekcí zraku – pokud dítě nosí brýle,
                        cvičí s nimi. Hlavním principem ortoptických cvičení je
                        disociace obrazů, tedy předložení mírně odlišného obrazu
                        každému oku. Mozek se pak učí tyto obrazy správně spojit
                        do jednoho vjemu.
                    </p>
                    <p className='mt-4'>
                        K tomuto účelu se používají speciální přístroje, které
                        pracují na principu oddělení obrazů. Každé oko dostává
                        jiný podnět, a tím se posiluje jejich spolupráce. Mezi
                        nejčastěji využívané přístroje patří synoptofor,
                        cheiroskop, zrcadlový stereoskop, Rémyho separátor nebo
                        mřížka na čtení.
                    </p>
                </>
            </Pristroj>
            <Pristroj reverse title={'2. Cheiroskop'} image={cheiroskop}>
                <>
                    <p>
                        Cheiroskop je přístroj, který umožňuje dětem trénovat
                        souhru obou očí prostřednictvím obkreslování obrázků.
                        Obrázky se vkládají z boku přístroje a promítají se na
                        vodorovnou podložku. Dítě je musí obkreslit, což ho nutí
                        používat obě oči současně. Přístroj pracuje na principu
                        šikmého zrcadla, které rozdělí obraz mezi oči a nutí
                        mozek k jejich správnému propojení.
                    </p>
                    <p className='mt-4'>
                        Výhodou cheiroskopu je jeho univerzálnost – lze jej
                        snadno přizpůsobit pravákům i levákům. Pro menší děti,
                        které ještě neumí kreslit, existuje zjednodušená forma
                        cvičení nazývaná „lov motýla“. Ortoptistka posunuje po
                        podložce obrázek motýla a dítě ho musí chytit do síťky,
                        což pomáhá rozvíjet zrakovou koordinaci.
                    </p>
                </>
            </Pristroj>
            <Pristroj
                title={'3. Zrcadlový stereoskop'}
                image={zrcadlovyStereosk}
            >
                <>
                    <p>
                        Zrcadlový stereoskop je přístroj, který umožňuje
                        trénovat spojování obrazů z obou očí. Skládá se ze
                        dvoudílné podložky oddělené přepážkou. Díky umístěnému
                        zrcadlu se dítě učí spojit obrázky z obou polovin
                        podložky do jednoho celku. Tento přístroj pomáhá
                        posilovat schopnost fúze a prostorového vnímání, což je
                        klíčové pro správné vidění v běžném životě.
                    </p>
                </>
            </Pristroj>
            <Pristroj
                reverse
                title={'4. Rémyho separátor'}
                image={remyhoSeparator}
            >
                <>
                    <p>
                        Rémyho separátor je jednoduchý přístroj složený z
                        neprůhledné přepážky, která odděluje zorná pole obou
                        očí. Na jednom konci přístroje se nachází dva otvory
                        obsahující odlišné obrázky, například kolo a kříž. Dítě
                        se při pohledu do dálky snaží tyto dva obrázky spojit –
                        tedy vidět kříž uvnitř kola.
                    </p>
                    <p className='mt-4'>
                        Tento přístroj se využívá k diagnostice schopnosti
                        binokulárního spojování obrazů. Pokud dítě nedokáže
                        obrázky spojit, může to signalizovat poruchu vnímání
                        prostorové hloubky nebo nedostatečnou spolupráci očí.
                    </p>
                </>
            </Pristroj>

            <Pristroj title={'5. Mřížka na čtení'} image={mrizka}>
                <>
                    <p>
                        Mřížka na čtení slouží k testování kvality binokulárního
                        vidění při čtení textu. Umístí se mezi oči a čtený text,
                        čímž narušuje normální vizuální vjem. Dítě s dobrým
                        binokulárním viděním dokáže text číst bez problémů.
                        Naopak u dítěte s poruchou vidění se některá písmena
                        mohou „ztrácet“ nebo zkreslovat.
                    </p>
                    <p className='mt-4'>
                        Intenzita rušivého efektu závisí na vzdálenosti mřížky
                        od textu – čím blíže je mřížka k textu, tím více
                        narušuje čtení u dětí se slabým binokulárním viděním.
                        Tento test pomáhá identifikovat zrakové problémy, které
                        mohou negativně ovlivnit školní výkon dítěte.
                    </p>
                </>
            </Pristroj>

            <h2 className='mt-6'>Proč jsou ortoptická cvičení důležitá?</h2>

            <p className='mt-4 sm:mt-8'>
                Ortoptická cvičení hrají klíčovou roli v léčbě poruch
                binokulárního vidění. Pravidelným tréninkem se děti učí správně
                využívat obě oči, což pomáhá nejen při čtení a prostorové
                orientaci, ale i v běžném životě.
            </p>

            <p className='mt-4'>
                Cvičení přispívají k léčbě šilhání, zlepšují schopnost zaostření
                a posilují celkovou kvalitu vidění. Správně fungující
                binokulární vidění je zásadní pro hloubkové vnímání, koordinaci
                pohybu a celkovou orientaci v prostoru.
            </p>
        </div>
    )
}

export default Cviceni
