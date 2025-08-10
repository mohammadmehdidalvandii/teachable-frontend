"use client"
import React from 'react';
import style from './NewCourses.module.css';
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

function NewCourses() {
  return (
    <section className={style.newCourses}>
        <div className="container">
            <div className={style.newCourses_wrapper}>
                <div className={style.newCourses_titleButtons}>
                    <Title title="جدیدتریــن ها" text="دوره‌های جدید، فرصت‌های نو"/>
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
                                    slidesPerView={4}
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
                                      slidesPerView: 4,
                                      spaceBetween: 20,
                                    },
                                  }}
                       className={style.newCourses_swiper}>
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

export default NewCourses