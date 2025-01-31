import React from 'react'
import TypeCard from './TypeCard'
import Button from '../../../../../public/components/Buttons/Button'

const PoruchyVideni = () => {
    return (
        <>
            <section
                className={`mt-16 w-full h-32 bg-gradient-to-t from-violet/20 to-transparent`}
            ></section>

            <section className='bg-violet/20 py-16'>
                <div className='container'>
                    <h1 className='staggerAnimationPart opacity-0'>
                        Poruchy vidění
                    </h1>
                    <p className='sm:text-lg py-2 staggerAnimationPart opacity-0'>
                        Dělíme na 3 stupně
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                        <TypeCard
                            number={1}
                            title={'Superpozice'}
                            description={
                                'Je schopnost překrytí nestejných obrázků oběma očima (pro pravé oko lev, pro levé oko klec – dítě by mělo vidět lva v kleci).'
                            }
                        ></TypeCard>

                        <TypeCard
                            number={2}
                            title={'Fúze'}
                            description={
                                'Je schopnost spojit stejné obrazy z obou očí do jednoho vjemu (např. sněhulák) a zároveň vnímat odlišné detaily pro každé oko (např. metla pro pravé, hrnec pro levé – dítě by mělo vidět všechny prvky).'
                            }
                        ></TypeCard>

                        <TypeCard
                            number={3}
                            title={'Stereopse'}
                            description={
                                'Je schopnost vytvoření hloubkového vjemu spojením obrazů dopadajících na mírně odlišná místa sítnice. Existují dva typy – zrcadlový lesk a posunuté obrázky pro vnímání plastiky.'
                            }
                        ></TypeCard>
                    </div>
                </div>
            </section>
            <section className='bg-violet/20 '>
                <div className='container staggerAnimationPart opacity-0 translate-y-16'>
                    <p className='sm:text-lg py-2'>
                        <strong> Ortoptická cvičení </strong>
                        pomáhají zlepšit binokulární vidění a léčbu šilhání.
                        Nejčastěji se využívá synoptofor, cheiroskop či
                        zrcadlový stereoskop, které trénují spojování obrazů
                        oběma očima. Díky speciálním pomůckám lze vidění nejen
                        diagnostikovat, ale i efektivně posilovat.
                    </p>

                    <div className='flex justify-center mt-8'>
                        <Button
                            text={'Více o cvičení'}
                            link={'/ortoptika/cviceni'}
                            className='bg-violet border-2 border-violet sm:hover:bg-transparent '
                        ></Button>
                    </div>
                </div>
            </section>

            <section
                className={`w-full h-32 bg-gradient-to-t from-transparent to-violet/20`}
            ></section>
        </>
    )
}

export default PoruchyVideni
