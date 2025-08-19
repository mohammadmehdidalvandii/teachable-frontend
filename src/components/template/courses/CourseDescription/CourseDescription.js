import React from "react";
import style from "./CourseDescription.module.css";
import { IoDocumentTextOutline } from "react-icons/io5";

function CourseDescription() {
  return (
    <div className={style.courseDescription}>
      <div className="courseDetails_titleIcon primary ">
        <span className="courseDetails_icon">
          <IoDocumentTextOutline />
        </span>
        <h4 className="courseDetails_title">توضیحات</h4>
      </div>
      <div className={style.courseDescription_content}>
        <img
          src="/assets/images/courseDe.webp"
          alt=""
          className={style.courseDescription_img}
        />
        <h3>معرفی دوره آموزش وردپرس صفر تا صد</h3>
        <p>
          وردپرس پرکاربردترین و محبوب‌ترین سیستم مدیریت محتوا است که به شما این
          فرصت را می‌دهد تا بتوانید بدون دانش برنامه‌نویسی، سایت طراحی کنید.
        </p>
      </div>
    </div>
  );
}

export default CourseDescription;
