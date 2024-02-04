'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AnimateSTProps {
    text: string,
    className?: string
}

const texto = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.08,
        }
    }
}

const palavra = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedSubTitle: React.FC<AnimateSTProps> = ({ text, className }) => {
    return (
        <div className='w-full mx-auto py-6 flex items-center justify-center text-center overflow-hidden
    sm:py-0'>
            <motion.h1 className={`inline-block w-full text-black dark:text-white font-bold capitalize text-2xl ${className}`}
                variants={texto}
                initial='initial'
                animate='animate'
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className='inline-block'
                            variants={palavra}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedSubTitle