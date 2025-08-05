"use client"
import React, { useState } from 'react';
import style from './Navbar.module.css'
import Link from 'next/link';
import { FaBars, FaShoppingBasket , FaTimes, FaUser  } from "react-icons/fa";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

function Navbar() {
    const [menu, setMenu] = useState(false); 
    const handlerShowMenu = ()=>{
        setMenu(true)
    }
    const handlerExitMenu = ()=>{
        setMenu(false)
    }
  return (
   <>
     <nav className={style.navbar}>
        <div className="container">
            <div className={style.navbar_wrapper}>
                <Link href='/' className={style.navbar_logo}>teachable</Link>
                <ul className={style.navbar_items}>
                    <li><Link href='/' className={style.navbar_link}>خانه</Link></li>
                    <li><Link href='/' className={style.navbar_link}>دوره ها</Link></li>
                    <li><Link href='/' className={style.navbar_link}>تماس با ما</Link></li>
                    <li><Link href='/' className={style.navbar_link}>درباره ما</Link></li>
                </ul>
                <ul className={style.navbar_items}>
                    <li><ThemeToggle/></li>
                    <li><Link href='/' className={style.navbar_link}><FaShoppingBasket/></Link></li>
                    <li><Link href='/' className={style.navbar_link}><FaUser/></Link></li>
                </ul>
            </div>
        </div>
    </nav>
    <nav className={style.navbarRes}>
        <div className="container">
           <div className={style.navbarRes_wrapper}>
            <Link href='/' className={style.navbar_logo}>teachable</Link>
             <ul className={style.navbar_items}>
                    <li><ThemeToggle/></li>
                    <li><Link href='/' className={style.navbar_link} style={{fontSize:'1.5rem'}}><FaShoppingBasket/></Link></li>
                    <span className={style.navbarRes_icon}
                    onClick={handlerShowMenu}
                    ><FaBars/></span>
            </ul>
             {menu && (
                <div className="bg_shadow">
                <div className={style.navbarRes_menu}>
                    <span className={style.navbarRes_icon}
                    onClick={handlerExitMenu}
                    ><FaTimes/></span>
                  <ul className={style.navbarRes_items}>
                    <li><Link href='/' className={style.navbarRes_link}>ثبت نام / ورود</Link></li>
                    <li><Link href='/' className={style.navbarRes_link}>خانه</Link></li>
                    <li><Link href='/' className={style.navbarRes_link}>دوره ها</Link></li>
                    <li><Link href='/' className={style.navbarRes_link}>تماس با ما</Link></li>
                    <li><Link href='/' className={style.navbarRes_link}>درباره ما</Link></li>
                </ul>
                </div>
             </div>
             )}
           </div>
        </div>
    </nav>
   </>
  )
}

export default Navbar