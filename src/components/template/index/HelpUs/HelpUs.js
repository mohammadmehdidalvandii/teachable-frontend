import React from 'react';
import style from './HelpUs.module.css';
import Title from '@/components/modules/Title/Title';
import { IoBookOutline , IoChatbubblesSharp } from "react-icons/io5";
import { BsBarChartLine , BsJournalCheck  } from "react-icons/bs";


function HelpUs() {
  return (
    <section className={style.helpUs}>
        <div className="container">
            <div className={style.helpUs_wrapper}>
                <Title title="مــا چه کمکی میتونیم بهت بکنیم" text="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"/>
                <div className={style.helpUs_items}>
                    <div className={style.helpUs_item}>
                        <span className={style.helpUs_item_icon}><IoBookOutline/></span>
                        <div className={style.helpUs_item_content}>
                            <h6 className={style.helpUs_title}>تضمین کاملترین محتوا</h6>
                            <p className={style.helpUs_paraph}>بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
                        </div>
                    </div>
                    <div className={style.helpUs_item}>
                        <span className={style.helpUs_item_icon}><IoChatbubblesSharp/></span>
                        <div className={style.helpUs_item_content}>
                            <h6 className={style.helpUs_title}>پشتیبانی دائمی</h6>
                            <p className={style.helpUs_paraph}>هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</p>
                        </div>
                    </div>
                    <div className={style.helpUs_item}>
                        <span className={style.helpUs_item_icon}><BsBarChartLine /></span>
                        <div className={style.helpUs_item_content}>
                            <h6 className={style.helpUs_title}>پروژه محور در راستای بازار کار</h6>
                            <p className={style.helpUs_paraph}>کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</p>
                        </div>
                    </div>
                    <div className={style.helpUs_item}>
                        <span className={style.helpUs_item_icon}><BsJournalCheck /></span>
                        <div className={style.helpUs_item_content}>
                            <h6 className={style.helpUs_title}>سراغ حرفه ای ها رفتیم</h6>
                            <p className={style.helpUs_paraph}>به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HelpUs