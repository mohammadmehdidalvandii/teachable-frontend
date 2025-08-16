import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <section className={style.footer}>
        <div className="container">
                <div className={style.footer_wrapper}>
                <div className={style.footer_top}>
                    <Link href='/' className={style.footer_top_link}>teachable</Link>
                    <div className={style.footer_top_contact}>
                        <Link href='' className={style.footer_contact_link}>info@teachable</Link>
                        <Link href='' className={style.footer_contact_link}>@teachable_support</Link>
                    </div>
                </div>
                <div className={style.footer_main}>
                    <div>
                        <div className={style.footer_content}>
                            <h5 className={style.footer_content_title}>درباره ما</h5>
                            <p className={style.footer_content_paraph}>شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
                        </div>
                    </div>
                    <div>
                        <h5 className={style.footer_title}>دوره های پیشنهادی</h5>
                        <ul className={style.footer_items}>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش پایتون</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش javascript</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش PHP</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش Java</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش C##</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>آموزش React.js</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className={style.footer_title}>دسترسی سریع</h5>
                        <ul className={style.footer_items}>
                            <li>
                                <Link href='' className={style.footer_link}>قوانین و مقررات</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>ارسال تیکت</Link>
                            </li>
                            <li>
                                <Link href='' className={style.footer_link}>همه دوره ها</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer