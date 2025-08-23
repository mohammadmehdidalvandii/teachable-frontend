import React from 'react'
import style from './DetailsLesson.module.css';
import LessonVideo from '../LessonVideo/LessonVideo';
import LessonInfo from '../LessonInfo/LessonInfo';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import HeadlineCourse from '../HeadlineCourse/HeadlineCourse';

function DetailsLesson() {
  return (
    <section className={style.detailsLesson}>
        <div className="container">
            <div className={style.detailsLesson_wrapper}>
                <div><LessonVideo/></div>
                <div className={style.detailsLesson_down}>
                    <div className={style.detailsLesson_right}>
                        <div className="box">
                            <LessonInfo/>   
                        </div>
                        <div className="box">
                            <QuestionAnswer/>
                        </div>
                    </div>
                    <div className={style.detailsLesson_left}>
                        <div className="box">
                            <HeadlineCourse/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailsLesson