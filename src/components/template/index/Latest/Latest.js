import React from 'react';
import style from './Latest.module.css';
import Title from '@/components/modules/Title/Title';
import Link from 'next/link';
import { RiArrowLeftUpLine } from "react-icons/ri";
import CourseCart from '@/components/modules/CourseCart/CourseCart';


function Latest() {
  return (
    <section className={style.latest}>
        <div className="container">
            <div className={style.latest_wrapper}>
                <div className={style.latest_linkTitle}>
                    <Title title='آخـــرین دوره های ما' text='سکوی پرتاپ شما به سمت موفقیت'/>
                    <Link href='' className="link_hero">
                        <span className="text">همه دوره ها</span>
                        <span className="icon"><RiArrowLeftUpLine/></span>
                    </Link>
                </div>
                    <div className={style.latest_courses}>
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

export default Latest