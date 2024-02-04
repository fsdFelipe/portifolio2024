'use client'
import React, { useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import { motion } from 'framer-motion';

interface DetailsProps {
    type: string,
    time: string,
    place: string,
    info: string
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-4 first:mt-0 last:mb-0 flex flex-col'>
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className='capitalize font-bold sm:text-2xl text-xl'>{type}&nbsp;</h3>
                <span className='capitalize font-medium text-black/75 xs:text-sm dark:text-teal-500'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    return (
        <div className='w-full h-full items-center justify-start flex flex-col gap-6 pt-16'>
            <AnimatedText text={'Educação'.split('')} className='sm:!text-4xl !text-3xl' />
            <div className='lg:w-2/3 w-full items-center justify-center flex sm:px-6 p-2'>
                <ul className='w-full flex flex-col items-start justify-start'>
                    <Details
                        type='Getão da Tecnologia da Informação' place='Fatec - Guaratingueta'
                        time='2015-2017'
                        info='Tecnólogo'
                    />
                    <Details
                        type='IT Essentials: PC Hardware and Software' place='Fatec - Guaratingueta'
                        time='2015'
                        info='Curso Livre - Cisco'
                    />
                    <Details
                        type='JavaScript Essentials 1' place='OpenEDG JS Institute'
                        time='2024'
                        info='Curso Livre'
                    />
                    <Details
                        type='Desenvolvedor Back end' place='Alura - Projeto ONE-Oracle'
                        time='2024'
                        info='Curso profisionalizante - em andamento'
                    />
                    <Details
                        type='JavaScript Essentials 2' place='OpenEDG JS Institute'
                        time='2024'
                        info='Curso Livre'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education