import React from 'react';
import style from './Navbar.module.css'
import Link from 'next/link';
import { FaShoppingBasket , FaUser  } from "react-icons/fa";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

function Navbar() {
  return (
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
  )
}

export default Navbar