import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <section className='h-screen w-full relative flex items-center'>
            <Image
                className='w-full h-screen absolute top-0 object-cover'
                src={
                    'https://images.pexels.com/photos/5996646/pexels-photo-5996646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
                alt={'ocni ordinace'}
                width={1500}
                height={1000}
            ></Image>

            <div className='container relative '>
                <div className='bg-white/80 backdrop-blur-sm w-1/2 rounded-xl p-8'>
                    <h2 className='text-xl'>
                        V našem specializovaném lékařském pracovišti poskytujeme
                        tyto služby:
                    </h2>
                    <ul className='list-disc mt-4 pl-4'>
                        <li>
                            Vyšetření na <strong>OCT přístroji</strong>
                        </li>
                        <li>
                            Vyšetření, sledování a léčba pacientů s{' '}
                            <strong>očním onemocněním</strong> (katarakta,
                            glaukom, záněty, refrakční vady a jiné), preventivní
                            kontrolní vyšetření u pacientů s rizikem vzniku
                            očního onemocnění, vyšetření u indikovaných pacientů
                            se <strong>systémovým onemocněním</strong>
                            (pacienti s <strong>cukrovkou</strong>,{' '}
                            <strong>vysokým krevním tlakem</strong>, s{' '}
                            <strong>endokrinní</strong> či{' '}
                            <strong>autoimunitní chorobou</strong> a jinými)
                        </li>
                        <li>
                            <strong>Ortoptika</strong> - zabývá se poruchami{' '}
                            <strong>zrakových funkcí</strong>
                            spojených se změnami <strong>postavení očí</strong>
                            (tj. šilháním - <strong>strabismem</strong>) a{' '}
                            <strong>tupozrakostí</strong>
                            (amblyopií), poruchy{' '}
                            <strong>prostorových funkcí</strong> (binokularita)
                            - diagnostika těchto poruch, terapie pomocí
                            komplexních
                            <strong>pleopticko-ortoptických cvičení</strong>
                        </li>
                        <li>
                            Práce se <strong>zrakově postiženými</strong>
                        </li>
                        <li>
                            <strong>Kontaktologie</strong> – kontaktní čočky
                        </li>
                        <li>
                            <strong>Zraková edukace</strong>
                        </li>
                    </ul>
                    <p className='text-base mt-4'>
                        Úzce spolupracujeme s praktickými lékaři i se
                        specializovanými lékaři z jiných oborů, našim pacientům
                        je takto zajištěn komplexní přístup v diagnostice a
                        léčbě jejich onemocnění
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
