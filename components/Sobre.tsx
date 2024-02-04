'use client'
import React from 'react'
import AnimatedText from './ui/AnimatedText'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Sobre = () => {

    return (
        <div className='w-full h-full items-center justify-center pt-12 md:pt-0 flex flex-col'>
            <AnimatedText text={'Sobre'.split('')} className='sm:!text-4xl !text-3xl' />
            <div className='w-full items-center justify-center flex flex-col'>
                <div className='w-full lg:h-[70vh] lg:flex px-4 items-start gap-6 py-6'>
                    <div className='lg:w-1/2 w-full h-full md:p-6 p-1 gap-4 flex flex-col items-center justify-center'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                                transition: {
                                    duration: 0.6,
                                    delay: 0.5
                                },
                            }}
                        >
                            Bem vindo ao meu portifólio, me chamo Felipe Dias, tenho 37 anos, atualmente busco por oportunidade em uma empresa de TI estabelecida com a possibilidade de trabalhar com as tecnologias mais recentes em projetos desafiadores e diversificados.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                                transition: {
                                    duration: 0.6,
                                    delay: 1
                                },
                            }}
                            className='py-4'
                        >
                            Sou autodidata, curioso e estou sempre aprimorando minhas habilidades, focado em me tornar um desenvolvedor full stack.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: [1, 1.2, 1],
                                transition: {
                                    duration: 0.6,
                                    delay: 1.5
                                },
                            }}
                        >
                            Entusiasta de TI e programação, apaixonado por desafios, busco constantemente transcender limites e transformar ideias em experiências significativas. Meu portfólio é o reflexo do meu compromisso em trazer inovação, originalidade e excelência a cada projeto que abraço.
                        </motion.p>
                    </div>
                    <div className='sm:relative hidden lg:w-1/2 w-full h-full sm:flex items-center justify-center p-6'>
                        <Image src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill alt='Dev' className='p-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre