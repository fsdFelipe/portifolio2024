'use client'
import React from 'react'
import AnimatedSubTitle from './ui/AnimatedSubTitle'
import AnimatedText from './ui/AnimatedText'
import { SiFramer, SiGit, SiGithub, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'

const Techs = () => {
    return (
        <div className='w-full h-full items-center justify-center pt-16'>
            <AnimatedText text={'Tecnologias'.split('')} className='sm:!text-4xl !text-3xl' />
            <div className='mt-8 lg:w-2/3 w-full mx-auto flex flex-col sm:gap-6 gap-2 py-4 mb-12'>
                <motion.div className='w-2/3 ml-auto'
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <AnimatedSubTitle text='Front End' />
                </motion.div>
                <div className='w-full flex gap-10 px-4 justify-end'>
                    <SiReact className='rounded-full flex w-10 h-10' />
                    <SiNextdotjs className='rounded-full flex w-10 h-10' />
                    <SiFramer className='flex w-10 h-10' />
                    <SiTailwindcss className='rounded-full flex w-10 h-10' />
                    <SiTypescript className='flex w-10 h-10' />
                </div>
                <motion.div className='w-2/3 ml-auto'
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <AnimatedSubTitle text='Back End' />
                </motion.div>
                <div className='w-full flex gap-10 px-4 justify-end'>
                    <SiNodedotjs className='rounded-full w-10 h-10' />
                    <SiNextdotjs className='rounded-full w-10 h-10' />
                </div>
                <motion.div className='w-2/3 ml-auto'
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <AnimatedSubTitle text='Outros' />
                </motion.div>
                <div className='w-full flex gap-10 px-4 justify-end '>
                    <SiGit className='rounded-full w-10 h-10' />
                    <SiGithub className='rounded-full w-10 h-10' />
                </div>
            </div>
        </div>
    )
}

export default Techs