import React from 'react'
import Button from '../../../../public/components/Buttons/Button'
import TypeCard from './TypeCard'

const DeleniCocek = () => {
    return (
        <>
            <section
                className={`mt-16 w-full h-32 bg-gradient-to-t from-blue/20 to-transparent`}
            ></section>

            <section className=' bg-blue/20'>
                <div className='container'>
                    <h2 className='opacity-0 staggerAnimationPart'>
                        Typy čoček
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <TypeCard
                            title={'Jednoohniskové'}
                            description={
                                'Určeny pro korekci dalekozrakosti a krátkorzrakosti.'
                            }
                            pros={[
                                'Tradiční design',
                                'Dobré vidění v optickém středu',
                            ]}
                            cons={['Kvalita zobrazení se u kraje snižuje']}
                        ></TypeCard>

                        <TypeCard
                            title={'Progresivní'}
                            description={
                                ' Pro vidění na dálku i blízko, s viditelným segmentem pro blízkou vzdálenost.'
                            }
                            pros={[
                                'Osvědčený konzervativní design',
                                'Dobré vidění na dálku a do blízka',
                                'Nízká cena',
                            ]}
                            cons={[
                                'Absence vidění na střední vzdálenost',
                                'Viditelný segment zóny do blízka',
                                'Viditelný segment zóny do blízka',
                            ]}
                        ></TypeCard>

                        <TypeCard
                            title={'Bifokální'}
                            description={
                                ' Pro vidění na dálku i blízko, s viditelným segmentem pro blízkou vzdálenost.'
                            }
                            pros={[
                                'Osvědčený konzervativní design',
                                'Dobré vidění na dálku a do blízka',
                                'Nízká cena',
                            ]}
                            cons={[
                                'Absence vidění na střední vzdálenost',
                                'Viditelný segment zóny do blízka',
                                'Skok obrazu na okrajích segmentu',
                            ]}
                        ></TypeCard>

                        <TypeCard
                            title={'Interiérové'}
                            description={
                                'Určené pro práci v interiéru, ideální pro počítačovou práci.'
                            }
                            pros={['Osvědčené']}
                            cons={['Chybí zóna pro střední vzdálenost']}
                        ></TypeCard>
                    </div>
                </div>

                <div className='mt-8 flex flex-col gap-2 justify-center items-center opacity-0 staggerAnimationPart translate-y-16'>
                    <p>Více o čočkách se můžete dozvědět zde</p>

                    <Button
                        text='Více o čočkách'
                        link='/ocni-optika/cocky'
                        className='bg-blue border-blue text-white sm:hover:bg-transparent w-fit'
                    ></Button>
                </div>
            </section>

            <section
                className={`w-full h-32 bg-gradient-to-t from-transparent to-blue/20`}
            ></section>
        </>
    )
}

export default DeleniCocek
