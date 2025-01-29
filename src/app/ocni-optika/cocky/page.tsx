import React from 'react'
import Image from 'next/image'

import NaCteni from '@/../public/images/Cocky/Bryle-na-cteni.webp'
import KPocitaci from '@/../public/images/Cocky/Bryle-k-pocitaci.webp'
import DoMistnosti from '@/../public/images/Cocky/Bryle-do-mistnosti.webp'
import { Metadata } from 'next'
import Button from '../../../../public/components/Buttons/Button'

export const metadata: Metadata = {
    title: 'Typy čoček',
    description: 'Oční optika olomouc',
}

const Cocky = () => {
    return (
        <div className='container pt-32'>
            <h1 className=''>Typy čoček</h1>

            <section className='mt-8 '>
                <div className='flex flex-wrap gap-2 sm:gap-4'>
                    <Button
                        text={'Jednoohniskové'}
                        link={'#jednoohniskove'}
                        className='border-blue bg-blue'
                    ></Button>
                    <Button
                        text={'Progresivní'}
                        link={'#progresivni'}
                        className='border-blue bg-blue'
                    ></Button>
                    <Button
                        text={'Bifokální'}
                        link={'#bifokalni'}
                        className='border-blue bg-blue'
                    ></Button>
                    <Button
                        text={'Interiérové'}
                        link={'#interierove'}
                        className='border-blue bg-blue'
                    ></Button>
                </div>
            </section>

            <section id='jednoohniskove' className='py-10 sm:py-16'>
                <h2>Jednoohniskové čočky</h2>
                <p className='mt-4'>
                    Jednoohniskové brýlové čočky jsou určeny pro korekci
                    dalekozrakosti a krátkozrakosti. Jejich optické vlastnosti a
                    užitná hodnota jsou závislé na designu a použitém materiálu.
                </p>

                <h3 className='py-3'>Dělení</h3>

                <div className='flex justify-between flex-wrap gap-4'>
                    <div>
                        <h4>Sférické</h4>

                        <ul>
                            <li className='text-green500'>+ Tradiční design</li>
                            <li className='text-green500'>
                                + Dobré vidění v optickém středu
                            </li>
                            <li className='text-red-600'>
                                - Kvalita zobrazení se u kraje snižuje
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Asférické</h4>

                        <ul>
                            <li className='text-green500'>
                                + Vhodné pro vyšší DPT hodnoty
                            </li>
                            <li className='text-green500'>
                                + Tenčí a lehčí než sférické
                            </li>
                            <li className='text-green500'>
                                + Ideální ve spojení se ztenčenými materiály
                            </li>
                            <li className='text-green500'>
                                + Esteticky plochá přední nebo zadní strana
                                čočky
                            </li>

                            <li className='text-red-600'>
                                - Kvalita zobrazení se u kraje snižuje
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Individuální</h4>

                        <ul>
                            <li className='text-green500'>
                                + Vhodné pro všechny refrakční vady oka
                            </li>
                            <li className='text-green500'>
                                + Výborné zobrazení po celé ploše čoček
                            </li>
                            <li className='text-green500'>
                                + Využití ve všech materiálech
                            </li>
                            <li className='text-green500'>
                                + Optimalizované minimální tloušťky čoček
                            </li>
                            <li className='text-green500'>
                                + Ostré a vysoce kontrastní vidění
                            </li>
                            <li className='text-green500'>
                                + Ideální pro nestandardní a sportovní brýlové
                                obruby
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id='progresivni' className='py-10 sm:py-16'>
                <h2>Progresivní čočky</h2>
                <p className='mt-4'>
                    Progresivní, jinak také nazývané multifokální brýlové čočky
                    jsou určeny pro korekci presbyopie. Ta přichází automaticky
                    s přibývajícím věkem, přibližně po 40 roku života. Projevuje
                    se neostrým viděním do blízka. Progresivní brýlové čočky
                    poskytují možnost ostrého vidění na všechny vzdálenosti.
                </p>

                <h3 className='py-3'>Design</h3>

                <div className='flex justify-between flex-wrap gap-4'>
                    <div>
                        <h4>Přední design</h4>

                        <ul>
                            <li className='text-green500'>
                                + Dobré vidění na všechny vzdálenosti
                            </li>
                            <li className='text-green500'>+ Nižší cena</li>
                            <li className='text-red-600'>
                                - Omezený výběr materiálů
                            </li>
                            <li className='text-red-600'>
                                - Omezený výběr typu obruby
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Zadní design</h4>

                        <ul>
                            <li className='text-green500'>
                                + Optimalizace dle DPT hodnot
                            </li>
                            <li className='text-green500'>
                                + Stabilní velká zorná pole
                            </li>
                            <li className='text-green500'>
                                + Ostré a jasné vidění
                            </li>
                            <li className='text-green500'>
                                + Minimální periferní zkreslení
                            </li>
                            <li className='text-green500'>
                                + Neomezená volba materiálu
                            </li>
                            <li className='text-green500'>
                                + Neomezená volba brýlové obruby
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Individuální design</h4>

                        <ul>
                            <li className='text-green500'>
                                + Optimalizace dle DPT hodnot
                            </li>
                            <li className='text-green500'>
                                + Zohlednění individuálních parametrů zákazníka
                            </li>
                            <li className='text-green500'>
                                + Ostré a vysoce kontrastní vidění
                            </li>
                            <li className='text-green500'>
                                + Neomezená volba materiálu
                            </li>
                            <li className='text-green500'>
                                + Neomezená volba brýlové obruby
                            </li>
                            <li className='text-green500'>
                                + Ideální pro začínající uživatele
                            </li>
                            <li className='text-green500'>
                                + Nezbytné pro nestandardní a sportovní brýlové
                                obruby
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id='bifokalni' className='py-10 sm:py-16'>
                <h2>Bifokální brýlové čočky</h2>
                <p className='mt-4'>
                    Bifokální brýlové čočky představují stále oblíbený způsob
                    presbyopické korekce v rámci jedné obruby. Tyto typy
                    brýlových čoček jsou snadno rozpoznatelné díky viditelnému
                    segmentu pro vidění na blízko. Podle individuálních potřeb
                    lze použít různé velikosti segmentů. Standardní šíře 28 mm,
                    dále pak 35 mm, 45 mm a typ E-line.
                </p>

                <div className='flex flex-wrap gap-10 mt-4'>
                    <div>
                        <h4>Výhody</h4>

                        <ul>
                            <li className='text-green500'>
                                + Osvědčený konzervativní design
                            </li>
                            <li className='text-green500'>
                                + Dobré vidění na dálku a do blízka
                            </li>
                            <li className='text-green500'>+ Nízká cena</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Nevýhody</h4>

                        <ul>
                            <li className='text-red-600'>
                                - Absence vidění na střední vzdálenost
                            </li>
                            <li className='text-red-600'>
                                - Viditelný segment zóny do blízka
                            </li>
                            <li className='text-red-600'>
                                - Skok obrazu na okrajích segmentu
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id='interierove' className='py-10 sm:py-16'>
                <h2>Progresivní čočky</h2>
                <p className='mt-4'>
                    Ideální brýlové čočky pro práci v interiéru. Interiérové
                    brýlové čočky jsou určeny pro použití zejména při práci s
                    počítačem, práci lékařů, úředníků a mnoha dalších, kteří při
                    své profesi potřebují korekci zraku na blízko a na střední
                    vzdálenost. Tyto brýlové čočky poskytují nejen kvalitní
                    ergonomické vidění, ale také pomáhají předcházet únavě,
                    podráždění očí nebo bolestem hlavy.
                </p>

                <h3 className='py-3'>Typy</h3>

                <div className='flex justify-between flex-wrap lg:flex-nowrap gap-4'>
                    <div>
                        <h4>Brýle na čtení</h4>
                        <ul className='list-disc pl-8'>
                            <li className=''>
                                Pouze na konkrétní přesně definovanou vzdálenost
                            </li>

                            <li className=''>Standardně 30 – 40 cm</li>
                        </ul>

                        <Image
                            src={NaCteni}
                            alt={'Brýle na čtení'}
                            width={400}
                            height={300}
                            className='max-w-72 mt-2 w-full h-auto'
                        ></Image>
                    </div>

                    <div>
                        <h4>Brýle k počítači</h4>

                        <ul className='list-disc pl-8'>
                            <li className=''>
                                Pouze na konkrétní přesně definovanou vzdálenost
                            </li>

                            <li className=''>Standardně 30 – 40 cm</li>
                        </ul>

                        <Image
                            src={KPocitaci}
                            alt={'Brýle na čtení'}
                            width={400}
                            height={300}
                            className='max-w-72 mt-2 w-full h-auto'
                        ></Image>
                    </div>

                    <div>
                        <h4>Brýle do místnosti</h4>

                        <ul className='list-disc pl-8'>
                            <li className=''>
                                Pouze na konkrétní přesně definovanou vzdálenost
                            </li>

                            <li className=''>Standardně 30 – 40 cm</li>
                        </ul>

                        <Image
                            src={DoMistnosti}
                            alt={'Brýle na čtení'}
                            width={400}
                            height={300}
                            className='max-w-72 mt-2 w-full h-auto'
                        ></Image>
                    </div>
                </div>
            </section>

            <h1 className=''>Materiál čoček</h1>
        </div>
    )
}

export default Cocky
