'use client'
import React, { forwardRef, InputHTMLAttributes } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
}

const SwitchThemeButton = forwardRef<HTMLInputElement, SwitchProps>(function SwitchButton(props, ref) {
    return (
        <label className="cursor-pointer">
            <div className="flex gap-2">
                <input type="checkbox" className="hidden" ref={ref} {...props} />
                <div className='w-8 h-5 -p-1.5 rounded-full bg-gray-500'>
                    <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${props.checked ? "bg-black" : "bg-blue-100 text-yellow-500 translate-x-3"}`}>
                        {props.checked ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
                    </div>
                </div>
            </div>
        </label>
    );
});

export default SwitchThemeButton;