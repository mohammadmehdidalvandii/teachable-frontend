import React from 'react';
import style from './CourseInfo.module.css'
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineAccessTime ,MdOutlineDateRange } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";


function CourseInfo() {
  return (
    <div className={style.courseInfo}>
        <div className={style.courseInfo_items}>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><CiCircleInfo/></span>
                <div className={style.courseInfo_item_content}>
                    <h6>وضعیت دوره</h6>
                    <p>درحال برگذاری</p>
                </div>
            </div>
            </div>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><MdOutlineAccessTime/></span>
                <div className={style.courseInfo_item_content}>
                    <h6>مدت زمان دوره</h6>
                    <p>14</p>
                </div>
            </div>
            </div>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><MdOutlineDateRange /></span>
                <div className={style.courseInfo_item_content}>
                    <h6>آخرین به روزرسانی</h6>
                    <p>1404/0/26</p>
                </div>
            </div>
            </div>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><HiUsers/></span>
                <div className={style.courseInfo_item_content}>
                    <h6>روش پشتیبانی </h6>
                    <p>آنلاین</p>
                </div>
            </div>
            </div>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><FaBriefcase/></span>
                <div className={style.courseInfo_item_content}>
                    <h6>پیش نیاز</h6>
                    <p>CSS | HTML | PHP</p>
                </div>
            </div>
            </div>
            <div className="box">
                            <div className={style.courseInfo_item}>
                <span className={style.courseInfo_item_icon}><BsCameraVideoFill/></span>
                <div className={style.courseInfo_item_content}>
                    <h6>نوع مشاهده </h6>
                    <p>آنلاین</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CourseInfo