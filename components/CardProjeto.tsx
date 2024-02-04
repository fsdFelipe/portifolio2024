import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const FramerImage = motion(Image)

interface ProjetoProps {
    type: string,
    title: string,
    projetoImg: string,
    link: string,
    github: string,
}

const CardProjeto: React.FC<ProjetoProps> = ({ type, title, projetoImg, link, github }) => {
    return (
        <article className='w-[300px] flex flex-col items-center justify-center rounded-3xl border border-solid border-dark
      bg-white dark:bg-black dark:text-white dark:border-white shadow-2xl p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={projetoImg}
                    alt={title} width={250} height={200} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-red-400 font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className='text-lg  font-semibold underline md:text-base'
                    >Visit Project
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <FaGithub className='w-6 h-6' />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default CardProjeto