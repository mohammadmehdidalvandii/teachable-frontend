import React from 'react'
import style from './DetailsLesson.module.css';
import LessonVideo from '../LessonVideo/LessonVideo';

function DetailsLesson() {
  return (
    <section className={style.detailsLesson}>
        <div className="container">
            <div className={style.detailsLesson_wrapper}>
                <div><LessonVideo/></div>
                <div className={style.detailsLesson_down}>
                    <div className={style.detailsLesson_right}>right</div>
                    <div className={style.detailsLesson_left}>left</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailsLesson