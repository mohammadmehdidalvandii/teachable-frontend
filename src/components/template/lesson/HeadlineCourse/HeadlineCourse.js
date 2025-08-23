import React from 'react';
import style from './HeadlineCourse.module.css';
import CourseAccordion from '../../courses/CourseAccordion/CourseAccordion';

function HeadlineCourse() {
  return (
    <section className={style.headlineCourse}>
       <div className={style.wrapper_headlineCourse}>
            <h2 className={style.headlineCourse_title}>سرفصل دوره ها</h2>
            <div className={style.headlineCourse_items}>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
            </div>
       </div>
    </section>
  )
}

export default HeadlineCourse