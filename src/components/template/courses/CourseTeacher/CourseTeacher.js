import React from 'react';
import style from './CourseTeacher.module.css'
import Link from 'next/link';

function CourseTeacher() {
  return (
    <section className={style.courseTeacher}>
        <div className={style.courseTeacher_content}>
            <img src="/assets/images/user.jpg" alt="" className={style.courseTeacher_img} />
            <h4 className={style.courseTeacher_name}>امیر طاهرخانی | مدرس دوره</h4>
            <p className={style.courseTeacher_paraph}>توسعه دهنده وردپرس | برنامه نویس فول استک حوزه وب</p>
            <Link href='/' className={`${style.courseTeacher_link} ${'btn primary'}`}>مشاهده پروفایل</Link>
        </div>
    </section>
  )
}

export default CourseTeacher