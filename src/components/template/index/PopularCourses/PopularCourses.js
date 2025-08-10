"use client"
import React from 'react';
import style from './PopularCourses.module.css';
import Title from '@/components/modules/Title/Title';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import CourseCart from '@/components/modules/CourseCart/CourseCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function PopularCourses() {
  return (
    <section className={style.popularCourses}>
        <div className="container">
            <div className={style.popularCourses_wrapper}>
                <div className={style.popularCourses_titleButtons}>
                    <Title title="پرطرفدار ترین دوره ها" text="دوره های محبوب و پروژه محور "/>
                    <div className="buttons_swiper">
                        <button className="btn navButtonPrev"><MdOutlineKeyboardArrowRight/></button>
                        <button className="btn navButtonNext"><MdOutlineKeyboardArrowLeft/></button>
                    </div>
                </div>
               
                    <Swiper
                     
                     navigation={{
                        nextEl: `.navButtonNext`,
                        prevEl: `.navButtonPrev`,
                     }}
                      modules={[Navigation]}
                                    slidesPerView={3}
                                    spaceBetween={20}
                                  breakpoints={{
                                    270: {
                                      slidesPerView: 1,
                                      spaceBetween: 20,
                                    },
                                    380: {
                                      slidesPerView: 1,
                                      spaceBetween: 20,
                                    },
                                    540: {
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },
                                    640: {
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 20,
                                    },
                                  }}
                       className={style.popularCourses_swiper}>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseCart/>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    </section>
  )
}

export default PopularCourses