import React from 'react';
import style from './Course.module.css';

function Course() {
  return (
    <section className={style.course}>
        <div className="container">
            <div className={style.course_grid}>
                <div className={style.course_grid_right}>this right</div>
                <div className={style.course_grid_left}>this left</div>
            </div>
        </div>
    </section>
  )
}

export default Course