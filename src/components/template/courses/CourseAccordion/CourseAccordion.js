"use client"
import React, { useState } from 'react';
import style from './CourseAccordion.module.css';
import Link from 'next/link';
import { MdKeyboardArrowDown , MdOutlineKeyboardArrowUp  } from "react-icons/md";


function CourseAccordion() {
    const [active, setActive] = useState(false);

    const handlerAccordion = ()=>{
        setActive(!active);
    }

  return (
    <div className={style.accordion}>
        <div className={style.accordion_header} 
        onClick={handlerAccordion}
        >
            <h4 className={style.accordion_header_title}>معرفی دوره</h4>
            <div className={style.accordion_lessonIcon}>
                <span className={style.accordion_lesson}>درس 1</span>
                <span className={style.accordion_icon}><MdKeyboardArrowDown/></span>
            </div>
        </div>
        {active && (
        <div className={style.accordion_content}>
            <Link href='/lesson/0' className={style.accordion_content_link}>ویدیو معرفی دوره</Link>
            <Link href='/lesson/0' className={style.accordion_content_link}>ویدیو معرفی دوره</Link>
            <Link href='/lesson/0' className={style.accordion_content_link}>ویدیو معرفی دوره</Link>
            <Link href='/lesson/0' className={style.accordion_content_link}>ویدیو معرفی دوره</Link>
            <Link href='/lesson/0' className={style.accordion_content_link}>ویدیو معرفی دوره</Link>
        </div>
        )}
    </div>
  )
}

export default CourseAccordion