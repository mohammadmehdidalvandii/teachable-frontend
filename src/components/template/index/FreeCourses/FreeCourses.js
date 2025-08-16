import React from 'react';
import style from './FreeCourses.module.css'
import Title from '@/components/modules/Title/Title';
import Link from 'next/link';
import { RiArrowLeftUpLine } from 'react-icons/ri';
import CourseCart from '@/components/modules/CourseCart/CourseCart';

function FreeCourses() {
  return (
    <section className={style.freeCourses}>
        <div className="container">
            <div className={style.freeCourses_wrapper}>
                <div className={style.freeCourses_linkTitle}>
                    <Title title='محبوب ترین دوره ها' text="پرمخاطب ترین دوره های رایگان سبزلرن"/>
                    <Link href='' className="link_hero">
                        <span className="text">همه دوره ها</span>
                        <span className="icon"><RiArrowLeftUpLine/></span>
                    </Link>
                </div>
                  <div className={style.freeCourses_items}>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default FreeCourses