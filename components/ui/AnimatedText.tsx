'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
    text: string[];
    className?: string;
}

const texto: Variants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const letra: Variants = {
    initial: {
        opacity: 0,
        scale: 1,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: [1, 1.2, 0.8, 1.1, 1],
        transition: {
            duration: 1,
        },
    },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
    return (
        <div className='w-full mx-auto flex items-center justify-center text-left'>
            <motion.h1
                className={`inline-block w-full text-black dark:text-white text-center font-extrabold md:text-2xl text-lg ${className}`}
                variants={texto}
                initial='initial'
                animate='animate'
            >
                {text.map((word, index) => (
                    <motion.span
                        key={word + '-' + index}
                        className='inline-block hover:text-cyan-500'
                        variants={letra}
                        whileHover={{
                            scale: [1, 1.3, 1],
                            transition: {
                                duration: 0.6,
                            },
                        }}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;