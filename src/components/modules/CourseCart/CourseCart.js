import React from 'react';
import style from './CourseCart.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaUser } from 'react-icons/fa';
import { LuUsers } from "react-icons/lu";


function CourseCart() {
  return (
    <Link href='' className={style.courseCart}>
        <Image src='/assets/images/course.webp' width={200} height={200} alt='course' className={style.courseCart_img}/>
        <div className={style.courseCart_content}>
            <h5 className={style.course_title}>آموزش جامع توسعه وردپرس</h5>
            <p className={style.course_paraph}>آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس</p>
            <div className={style.courseCart_teacherRete}>
                <div className={style.courseCart_teacher}>
                    <span className={style.icon}><FaUser/></span>
                    <span className={style.text}>امیر محمدی</span>
                </div>
                <div className={style.courseCart_rate}>
                    <span className={style.text}>5.0</span>
                    <span className={style.icon}><FaStar/></span>
                </div>
            </div>
            <div className={style.courseCart_priceStudent}>
                  <div className={style.courseCart_student}>
                    <span className={style.icon}><LuUsers/></span>
                    <span className={style.text}>59</span>
                </div>
                <span className={style.courseCart_price}>4,000,000 تومان</span>
            </div>
        </div>
    </Link>
  )
}

export default CourseCart