'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'

const Socials = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed lg:w-1/3 w-full flex items-center mx-auto z-30 border py-2 rounded-lg transition-all ease-in ${scrollPosition > 90 ? 'lg:bottom-0 bottom-0 duration-300 lg:w-full' : 'lg:bottom-10 bottom-0'}`}>
            <div className='absolute top-0 w-full h-full -z-10 flex bg-white opacity-60 blur-sm' />
            <nav className='flex flex-col w-full items-center justify-between gap-1'>
                <ul className='flex w-full justify-center items-center gap-2'>
                    <li className=''><Link href='https://www.youtube.com/' target='_blank'>
                        <TfiYoutube className='w-4 h-4 hover:text-red-500' /></Link>
                    </li>
                    <li className=''>
                        <Link href='https://github.com/fsdFelipe/' target='_blank'>
                            <FaGithub className='w-4 h-4 hover:text-black' /></Link>
                    </li>
                    <li className=''>
                        <Link href='https://www.linkedin.com/in/felipe-dias-6930b8b2/' target='_blank'>
                            <FaLinkedin className='w-4 h-4 hover:text-blue-700' /></Link>
                    </li>
                </ul>
                <span className='text-xs'>Felipe Dias - 2024</span>
            </nav>
        </div>
    )
}

export default Socials