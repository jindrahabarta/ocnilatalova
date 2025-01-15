import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section className='container pt-20'>
            <h1>O nás</h1>
            <div className='flex gap-10 mt-10'>
                <div className='flex-1'>
                    <p>
                        MUDr. Olga Látalová má bohaté zkušenosti v oblasti
                        očního lékařství, zejména v pedooftalmologii,
                        strabologii, ortoptice a léčbě binokulárních funkcí.
                        Dlouhodobě působila na Oční klinice Fakultní nemocnice v
                        Olomouci, kde vedla oddělení a poradnu pro diagnostiku i
                        léčbu šilhání, včetně chirurgických zákroků. Po
                        osamostatnění v roce 1994 se zaměřila na všeobecnou
                        ambulantní oftalmologii a pokračuje v péči o dětské
                        pacienty se zrakovými onemocněními, včetně speciálních
                        pleopticko-ortoptických cvičení. Aktivně spolupracuje se
                        školami pro zrakově postižené a Českým svazem zrakově
                        postižených sportovců.
                    </p>
                    <p className='mt-4'>
                        V roce 2013 byly otevřeny moderní prostory s rozšířeným
                        přístrojovým vybavením a bezbariérovým přístupem, které
                        zlepšují komfort pacientů a umožňují komplexní
                        diagnostiku i terapii. Specializovaná ortoptická sestra
                        zde provádí ortoptická cvičení pod vedením MUDr.
                        Látalové, což přispívá k vysoké úrovni poskytované péče.
                        Tyto inovace zajišťují dostupnost služeb pro široké
                        spektrum pacientů včetně těch s pohybovými omezeními.
                    </p>
                </div>
                <div className='flex-1'>
                    <Image
                        src={
                            'http://www.ocnilatalova.cz/img/portfolio/foto1.jpg'
                        }
                        alt={'Obrázek o nás'}
                        width={1000}
                        height={1000}
                        className='rounded-xl'
                    ></Image>
                </div>
            </div>
        </section>
    )
}

export default About
