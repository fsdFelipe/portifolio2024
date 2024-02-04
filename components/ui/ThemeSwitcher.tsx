'use client'
import React, { useEffect, useState } from 'react'
import SwitchThemeButton from './SwitchThemeButton';

const ThemSwitcher = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Verifica se o tema já foi escolhido anteriormente
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme as 'light' | 'dark';
            }

            // Caso contrário, verifica a preferência do sistema
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }

        return 'light';
    });


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    useEffect(() => {
        // Aplica o tema ao carregar a página
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <SwitchThemeButton
            checked={theme === 'dark'}
            onChange={toggleTheme}
        />
    );
}

export default ThemSwitcher