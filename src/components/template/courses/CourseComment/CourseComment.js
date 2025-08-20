"use client"
import React, { useState } from 'react';
import style from './CourseComment.module.css';
import { FaComments } from "react-icons/fa6";

function CourseComment() {
    const [showComment , setShowComment] = useState(false);

    const handlerShowAddComment = ()=>{
        setShowComment(true);
    }

    const handlerExitAddComment = ()=>{
        setShowComment(false)
    }


  return (
    <section className={style.courseComment}>
        <div className={style.courseComment_titleButton}>
              <div className="courseDetails_titleIcon success ">
                <span className="courseDetails_icon">
                  <FaComments />
                </span>
                <h4 className="courseDetails_title">نظرات</h4>
              </div>
              <button className={`${style.courseComment_btn} ${'btn primary'}`}
              onClick={handlerShowAddComment}
              >ایجاد کامنت جدید</button>    
        </div>
        {showComment && (
        <div className={style.courseComment_addComment}>
            <div className={style.courseComment_info}>
                <span>
                    <img src="/assets/images/user.jpg" alt="users" />
                </span>
                <div>
                    <h5 className={style.courseComment_info_name}>admin users</h5>
                    <p className={style.courseComment_info_new}>ثبت نظر جدید</p>
                </div>
            </div>
            <div className={style.courseComment_content}>
                <p className={style.courseComment_warning}>لطفا پرسش مربوط به هر درس یا ویدئو دوره را در صفحه همان ویدئو مطرح کنید.</p>
                <textarea type="text" className={style.courseComment_addComment_text} placeholder='نظر خود را بنویسید' />
                <div className={style.courseComment_addComment_btns}>
                    <button className={`${style.courseComment_addComment_btn} ${'btn secondary'}`} onClick={handlerExitAddComment}>لغو</button>
                    <button className={`${style.courseComment_addComment_btn} ${'btn primary'}`}>ارسال</button>
                </div>
            </div>
        </div>
        )}
            <div className={style.courseComment_user}>
                <div className={style.courseComment_userInfo}>
                    <div>
                    <span>
                        <img src="/assets/images/user.jpg" alt="user" />
                    </span>
                    <div>
                        <h4 className={style.courseComment_userInfo_name}>user client</h4>
                        <span>|</span>
                        <span className={style.courseComment_userInfo_role}>کاربر</span>
                    </div>
                    </div>
                    <button className='btn primary'>پاسخ</button>
                </div>
                <p className={style.courseComment_user_response}>مورد اخر اینکه من تا به حال هر چی دوره از سبزلرن دیدم کیفیت صدا خیلی خوب بوده ولی کیفیت صدای این دوره نه ):
توی ویدئو معرفی مشخص هست که جلوی استاد طاهر خانی میکرفون هست و صداشون توی معرفی دوره خیلی عالی به نظر میرسه اما در چند قسمت ابتدایی که آپلود شده و من مشاهده کردم اینطور نبو</p>
            </div>
    </section>
  )
}

export default CourseComment