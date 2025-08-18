import React from 'react';
import style from './CourseDetails.module.css';
import CourseDetailsVideo from '../CourseDetailsVideo/CourseDetailsVideo';

function CourseDetails() {
  return (
    <section className={style.courseDetails}>
        <div className="container">
            <div className={style.courseDetails_grid}>
                <div className={style.courseDetails_top}>
                    <div>
                        <div className={style.courseDetails_content}>
                            <h4 className={style.courseDetails_content_title}>آموزش جامع توسعه وردپرس</h4>
                            <p className={style.courseDetails_content_paraph}>آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که وردپرس پرکاربردترین و محبوب‌ترین سیستم مدیریت محتوا است که در دنیای طراحی سایت حرف اول را می‌زند. بنابراین یادگیری تخصصی آن می‌تواند درهای بسیاری</p>
                            <div className={style.courseDetails_price_buttons}>
                                <button className={`${style.courseDetails_btn} ${'btn primary'}`}>افزودن به سبد خرید</button>
                                <p className={style.courseDetails_price}>4,000,000 تومان</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.courseDetails_video}>
                        <CourseDetailsVideo/>
                    </div>
                </div>
                <div className={style.courseDetails_down}>
                    <div className={style.courseDetails_down_right}>this is down right</div>
                    <div className={style.courseDetails_down_left}>this is down left</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseDetails