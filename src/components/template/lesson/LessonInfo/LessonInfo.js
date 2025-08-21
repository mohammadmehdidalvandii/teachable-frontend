import React from 'react';
import style from './LessonInfo.module.css'

function LessonInfo() {
  return (
    <section className={style.lessonInfo}>
        <div className={style.lessonInfo_wrapper}>
            <h3 className={style.lessonInfo_title}>آموزش جامع توسعه وردپرس</h3>
            <p className={style.lessonInfo_nameVideo}> <span>1</span> ویدیو معرفی دوره  </p>
            <button className={`${style.lessonInfo_btn} ${'btn primary'}`}>دانلود ویدیو</button>
        </div>
    </section>
  )
}

export default LessonInfo