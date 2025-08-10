import React from 'react';
import style from './ArticleCart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowCircleLeft } from "react-icons/md";


function ArticleCart() {
  return (
    <div className={style.articleCart}>
        <Image src="/assets/images/article.webp" alt='article' width={250} height={200} className={style.articleCart_img}/>
        <div className={style.articleCart_content}>
            <h6 className={style.articleCart_title}>چرا Vibe Coding برای برنامه‌نویسان مبتدی یک فرصت طلایی است؟</h6>
            <p className={style.articleCart_paraph}>تصور کن پشت لپ‌تاپ نشستی و ایده‌ای مثل ساختن یک اپ ساده در ذهنت داری</p>
            <div className={style.articleCart_dateCreator}>
                <span className={style.articleCart_creator}>شهرام فندقی</span>
                <span className={style.articleCart_date}>1404/04/31</span>
            </div>
            <Link href='' className={style.articleCart_link}>
            <span className={style.text}>مطالعه مقاله</span>
            <span className={style.icon}><MdOutlineArrowCircleLeft/></span>
            </Link>
        </div>
    </div>
  )
}

export default ArticleCart