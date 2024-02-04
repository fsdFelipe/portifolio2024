'use client'
import Projetos from '@/components/Projetos'
import TransitionEffect from '@/components/ui/TransitionEffect'
import React from 'react'

const page = () => {
    return (
        <main className="w-full h-full p-1 sm:p-6">
            <TransitionEffect />
            <Projetos />
        </main>
    )
}

export default page