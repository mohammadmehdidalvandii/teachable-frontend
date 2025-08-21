import React from 'react';
import style from  './QuestionAnswer.module.css'

function QuestionAnswer() {
  return (
    <section className={style.questionAnswer}>
        <div className={style.questionAnswer_wrapper}>
            <h4 className={style.questionAnswer_title}>پرسش و پاسخ</h4>
            <div className={style.questionAnswer_content}>
                <h5 className={style.questionAnswer_content_title}>چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟</h5>
                <p>برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید، قبل از اینکه سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو خودتون حل کنید. اگه به جواب نرسیدید، می‌تونید از گوگل کمک بگیرید. اگه با خطایی مواجه شدید یا نیاز به نمونه‌ای داشتید، با استفاده از کلمات کلیدی مختلف توی گوگل سرچ کنید و از سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب 99٪ سوالات با این روش زیر 5 دقیقه پیدا میشه)</p>
                <p>از پرسیدن سوالات کلی مثل «من مثل شما انجام دادم ولی کار نکرد» یا «کد من مشکل داره و اجرا نمیشه» که جزئیات ندارن، خودداری کنید. وقتی سوال می‌پرسید، لطفاً اون رو با مستندات و به صورت شفاف و واضح بیان کنید تا قابل تحلیل و بررسی باشه. سعی کنید سوالاتتون مفهومی و دقیق باشه تا مکالمه‌ای که دارید خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال کنید، یه بار خودتون اون رو بخونید و مطمئن بشید که سوالتون خوانا و واضحه.</p>
            </div>
        </div>
        <div className={style.questionAnswer_add}>
            <div className={style.questionAnswer_info}>
                <img src="/assets/images/user.jpg" alt="" />
                <div>
                    <h5>students users</h5>
                    <span>پرسش جدید</span>
                </div>
            </div>
            <p className={style.questionAnswer_alert}>لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید.</p>
            <form action="#">
                <textarea className={style.questionAnswer_textSubject} placeholder='سوال خود را بپرسید'></textarea>
                <div className={style.questionAnswer_form_wrapper}>
                    <input type="file" name="" id="" />
                    <button className={`${style.questionAnswer_btn} ${'btn primary'}`}>ارسال</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default QuestionAnswer