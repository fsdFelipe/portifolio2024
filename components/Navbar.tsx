'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUser, FaSuitcase, FaEnvelope, FaGraduationCap, FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import ThemeSwitcher from './ui/ThemeSwitcher'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { TfiYoutube } from 'react-icons/tfi'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const pathname = usePathname()

    const handleMobile = () => {
        setMobile(!mobile);
    };

    return (
        <div className='fixed lg:w-2/3 w-full flex items-center z-30 border p-1 px-4 lg:px-12 rounded-lg top-0.5'>
            <div className='absolute top-0 left-0 w-full h-full -z-10 flex dark:bg-white bg-gray-400 opacity-60 blur-sm' />
            <nav className='flex w-full items-center justify-between'>
                <Link href='/'>
                    <Image src='/images/Logo.png' width={35} height={35} alt='Inicio' />
                </Link>
                <ul className='sm:flex hidden items-center gap-6'>
                    <li>
                        <Link href='/#sobre' className={`w-6 h-6 flex items-center ${pathname === '#sobre' ? 'text-teal-500' : ''}`}>
                            <FaUser className='hover:text-teal-500' />
                        </Link>
                    </li>
                    <li><Link href='/#edu' className={`w-6 h-6 flex items-center ${pathname === '#edu' ? 'text-teal-500' : ''}`}>
                        <FaGraduationCap className='w-6 h-6 hover:text-teal-500 ' />
                    </Link>
                    </li>
                    <li><Link href='/projetos' className={`w-6 h-6 flex items-center ${pathname === '/projetos' ? 'text-teal-500' : ''}`}><FaSuitcase className='w-5 h-5 hover:text-teal-500' /></Link></li>
                    <li><Link href='/contato' className={`w-6 h-6 flex items-center ${pathname === '/contato' ? 'text-teal-500' : ''}`}><FaEnvelope className='w-5 h-5 hover:text-teal-500' /></Link></li>
                    <li><ThemeSwitcher /></li>
                </ul>
                {/** Botão Mobile */}
                <div onClick={handleMobile} className='block sm:hidden z-10'>
                    {mobile ? (
                        <div className=' flex items-center justify-center gap-3'>
                            <ThemeSwitcher />
                            <AiOutlineClose size={20} />
                        </div>
                    ) : (
                        <div className=' flex items-center justify-center gap-3'>
                            <ThemeSwitcher /><AiOutlineMenu size={20} />
                        </div>
                    )}
                </div>
                {/** Menu Mobile */}
                {
                    mobile ?
                        <motion.div
                            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                            animate={{ scale: 1, opacity: 1 }}
                            className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                            <ul className='flex h-full items-start flex-col justify-center mt-2 gap-3'>
                                <li onClick={handleMobile} >
                                    <Link href='/#sobre' className='w-full flex items-center gap-3'>
                                        <FaUser className='w-5 h-5 hover:text-teal-500' />Sobre
                                    </Link>
                                </li>
                                <li onClick={handleMobile} >
                                    <Link href='/#edu' className='w-full flex items-center gap-3'>
                                        <FaGraduationCap className='w-6 h-6 hover:text-teal-500' />Educação
                                    </Link>
                                </li>
                                <li onClick={handleMobile} >
                                    <Link href='/projetos' className='w-full flex items-center gap-3'>
                                        <FaSuitcase className='w-5 h-5 hover:text-teal-500' />Projetos
                                    </Link>
                                </li>
                                <li onClick={handleMobile} >
                                    <Link href='/contato' className='w-full flex items-center gap-3'>
                                        <FaEnvelope className='w-5 h-5 hover:text-teal-500' />Contato
                                    </Link>
                                </li>
                            </ul>
                            <nav className='flex w-full mt-6 items-center justify-between flex-wrap px-4'>
                                <motion.a href='https://www.youtube.com/@meucaminhodev' target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='w-6'
                                >
                                    <TfiYoutube />
                                </motion.a>
                                <motion.a href='https://github.com/fsdFelipe/' target={'_blank'} className='w-6'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <FaGithub />
                                </motion.a>
                                <motion.a href='https://www.linkedin.com/in/felipe-dias-6930b8b2/' target={'_blank'} className='w-6'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a href='/instagram' target={'_blank'} className='w-6'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <FaInstagram />
                                </motion.a>
                                <motion.a href='https://discord.com/channels/1082425099308781589/1082425099824660553' target={'_blank'} className='w-6'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <FaDiscord />
                                </motion.a>
                            </nav>
                        </motion.div>
                        : null
                }
            </nav>
        </div>
    )
}

export default Navbar