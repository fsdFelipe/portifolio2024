'use client'
import AnimatedText from '@/components/ui/AnimatedText'
import TransitionEffect from '@/components/ui/TransitionEffect'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full md:pt-20 pt-12 flex items-start justify-center'>
            <TransitionEffect />
            <div className="md:w-[45%] w-full grid">
                <AnimatedText text={"Contato".split("")} className='sm:!text-4xl !text-3xl' />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: [1, 1.2, 1],
                        transition: {
                            duration: 0.6,
                            delay: 0.8
                        },
                    }}
                    className='sm:p-6 p-1'
                >
                    Estou disponível para  oportunidades como freelancer - especialmente em
                    projetos grandes e ambiciosos. No entando, se você tem qualquer demanda
                    ou perguntas, não hesite em entrar em contato usando o formulário abaixo.
                    Todos contatos serão respondidos o mais rápido possível
                </motion.p>
                <div className="w-full sm:p-6 p-1 dark:text-black">
                    <form className='flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <input placeholder="Nome e sobrenome"
                                type="text" required
                                className="w-full px-4 border h-10"
                            />
                            <input
                                placeholder="Email"
                                type='email'
                                name='email'
                                required
                                className="w-full px-4 border h-10"
                            />
                            <input
                                placeholder="Assunto"
                                type="text"
                                name="subject"
                                required
                                className="w-full px-4 border h-10"
                            />
                            <textarea
                                placeholder="Mensagem"
                                required
                                className='w-full h-12 border min-h-36 p-2'
                            ></textarea>
                        </div>
                        <input type="submit"
                            className="border w-full md:w-24 py-1 cursor-pointer dark:text-white hover:bg-teal-400 rounded-md mt-1"
                            value="ENVIAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page