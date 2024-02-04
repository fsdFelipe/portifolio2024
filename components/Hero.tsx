import React from 'react'
import DrawImg from './ui/DrawingImg'
import AnimatedText from './ui/AnimatedText'

const Hero = () => {
    return (
        <div className='w-full h-full flex items-center justify-center md:p-6 p-1'>
            <div className='flex w-full flex-col items-center justify-center gap-3'>
                <AnimatedText text={'Felipe Dias'.split('')} className='sm:!text-4xl !text-3xl z-20' />
                <DrawImg />
                <AnimatedText text={'Portifolio'.split('')} />
                <h1 className='-ml-1'>{'<Desenvolvedor web />'}</h1>
            </div>
        </div>
    )
}

export default Hero