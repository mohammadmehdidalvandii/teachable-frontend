"use client"
import React, { useEffect, useState } from 'react';
import style from './ThemeToggle.module.css';
import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    // Check for saved dark mode
    useEffect(()=>{
        const theme = localStorage.getItem('theme');
        if(theme === "dark"){
            setIsDark(true);
            return
        }
    },[])

    // apply theme
    useEffect(()=>{
        if(isDark){
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }else{
            document.body.classList.remove('dark');
            localStorage.setItem('theme',"light")
        }
    },[isDark])

  return (
    <button className={style.btnTheme}
    onClick={()=>setIsDark(!isDark)}
    >
        {isDark ? (
            <FaSun/>
        ):(
            <FaMoon/>
        )}
    </button>
  )
}

export default ThemeToggle