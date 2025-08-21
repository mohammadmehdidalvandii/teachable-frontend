import React from "react";
import style from "./StudentsRating.module.css";
import { FaStar, FaUsers } from 'react-icons/fa';

function StudentsRating() {
  return (
    <div className={style.studentsRating}>
      <div>
        <span className={style.studentsRating_icon}>
          <FaUsers />
        </span>
        <div className={style.studentsRating_content}>
          <h3>95</h3>
          <p>دانشجو</p>
        </div>
      </div>
      <div>
        <span className={style.studentsRating_icon}>
          <FaStar />{" "}
        </span>
        <div className={style.studentsRating_content}>
          <h3>5.0</h3>
          <p>امتیاز</p>
        </div>
      </div>
    </div>
  );
}

export default StudentsRating;
