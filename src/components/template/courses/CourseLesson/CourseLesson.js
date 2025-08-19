import React from 'react';
import style from './CourseLesson.module.css';
import { MdOutlinePlayLesson } from "react-icons/md";
import CourseAccordion from '../CourseAccordion/CourseAccordion';


function CourseLesson() {
  return (
    <section className={style.courseLesson}>
           <div className="courseDetails_titleIcon secondary ">
                <span className="courseDetails_icon">
                  <MdOutlinePlayLesson />
                </span>
                <h4 className="courseDetails_title">سر فصل ها </h4>
            </div>
            <div className={style.CourseLesson_content}>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
                <CourseAccordion/>
            </div>

    </section>
  )
}

export default CourseLesson