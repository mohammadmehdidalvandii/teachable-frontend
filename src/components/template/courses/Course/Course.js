"use client"
import React, { useState } from 'react';
import style from './Course.module.css';
import { FaSearch } from 'react-icons/fa';
import CourseCart from '@/components/modules/CourseCart/CourseCart';

function Course() {
    const [free , setFree] = useState(false);


  return (
    <section className={style.course}>
        <div className="container">
            <div className={style.course_grid}>
                <div className={style.course_grid_right}>
                    <div className={style.course_right}>
                                            <div className={style.courseBox}>
                        <div className={style.course_search}>
                            <input type="text" placeholder='جستجو بین دوره ها ...'/>
                            <button><FaSearch/></button>
                        </div>
                    </div>
                    <div className={style.courseBox}>
                        <div className={style.course_toggle}>
                            <span className={style.course_title}>فقط دوره های رایگان</span>
                            <label  className={style.switch}>
                                <input type="checkbox" className={style.switch_input} checked={free}  onChange={()=>setFree(!free)}/>
                                <span className={style.switch_slider}></span>
                            </label>
                        </div>
                    </div>
                    <div className={style.courseBox}>
                        <div className={style.course_toggle}>
                            <span className={style.course_title}>در حال پیش فروش</span>
                            <label  className={style.switch}>
                                <input type="checkbox"  />
                                <span className={style.switch_slider}></span>
                            </label>
                        </div>
                    </div>
                    <div className={style.courseBox}>
                        <div className={style.course_toggle}>
                            <span className={style.course_title}>دوره ها خریداری شده</span>
                            <label  className={style.switch}>
                                <input type="checkbox"  />
                                <span className={style.switch_slider}></span>
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={style.course_grid_left}>
                    <div className={style.courses_items}>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                        <CourseCart/>
                    </div>

                    <button className={`${style.course_btn} ${'btn primary'}`}>مشاهده بیشتر</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Course