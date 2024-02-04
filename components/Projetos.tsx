import React from 'react'
import AnimatedText from './ui/AnimatedText'
import CardProjeto from './CardProjeto'

const Projetos = () => {
    return (
        <div className='w-full min-h-[80vh] items-center mt-16 justify-start flex flex-col'>
            <AnimatedText text={'Projetos'.split('')} className='!text-4xl' />
            <div className='w-full justify-center items-center sm:flex grid p-6 gap-6 mt-4 bg-red-500'>
                <CardProjeto
                    title='Titulo do Projeto'
                    projetoImg='/images/projeto.jpg'
                    link='/'
                    github='/'
                    type='Featured Project'
                />
                <AnimatedText text={'Em Construção'.split('')} className='!sm:text-5xl !text-3xl' />
                <CardProjeto
                    title='Titulo do Projeto'
                    projetoImg='/images/projeto.jpg'
                    link='/'
                    github='/'
                    type='Featured Project'
                />
            </div>
        </div>
    )
}

export default Projetos