'use client'
import React from 'react';
import { motion } from 'framer-motion';

const DrawImg = () => {

    return (
        <div className='flex  items-center justify-center relative'>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className='w-[70%] h-[75%]'
            >
                <motion.path
                    d="M 164.534882 411.046509 L 210.465118 141.860458 L 176.162781 158.139526 L 121.511627 481.395355 L 164.534882 411.046509 Z"
                    fill="transparent"
                    initial={{ fill: 'transparent' }}
                    animate={{ fill: 'black' }}
                    transition={{ duration: 3, delay: 5, ease: 'easeInOut' }}
                />

                <motion.path
                    d="M 164.534882 411.046509 L 210.465118 141.860458 L 176.162781 158.139526 L 121.511627 481.395355 L 164.534882 411.046509 Z"
                    fill="transparent"
                    stroke="#0d9488"
                    strokeWidth="3"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 3, delay: 1 }}
                />

                <motion.path
                    d="M 170.930237 413.95347 L 222.093018 120.348839 L 152.906967 149.41861 L 27.325581 166.279068 L 375 26.16279 L 472.674408 19.767441 L 260.465097 106.976744 L 248.83721 175 L 361.046493 129.069769 L 312.790681 187.209299 L 242.441863 215.116283 L 222.093018 338.372101 L 170.930237 413.95347 Z"
                    strokeLinecap="round"
                    initial={{ fill: 'transparent' }}
                    animate={{ fill: 'black' }}
                    transition={{ duration: 4, delay: 5.4, ease: 'easeInOut' }}
                />
                <motion.path
                    d="M 170.930237 413.95347 L 222.093018 120.348839 L 152.906967 149.41861 L 27.325581 166.279068 L 375 26.16279 L 472.674408 19.767441 L 260.465097 106.976744 L 248.83721 175 L 361.046493 129.069769 L 312.790681 187.209299 L 242.441863 215.116283 L 222.093018 338.372101 L 170.930237 413.95347 Z"
                    fill="transparent"
                    stroke="#0d9488"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, pathOffset: 1 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{ duration: 4, delay: 1 }}
                />
            </motion.svg>
        </div>
    );
}

export default DrawImg