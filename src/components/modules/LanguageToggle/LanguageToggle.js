"use client"
import React, { useEffect } from 'react';
import style from'./LanguageToggle.module.css';
import {useTranslation} from 'react-i18next'

function LanguageToggle() {
    const {t , i18n} = useTranslation();

    useEffect(()=>{
        document.documentElement.classList.toggle('ltr' , i18n.language === 'en')
    },{});

    const handlerChangeLanguage = (event)=>{
        const lang = event.target.value;
        i18n.changeLanguage(lang)
        console.log("lang", lang)
        document.dir === 'fa' ? 'rtl':'ltr'
        document.documentElement.lang = lang;
        document.documentElement.classList.toggle('lte' , lang === 'en')
    }

  return (
    <select name="" id="" className={style.select}
    value={i18n.language}
    onChange={handlerChangeLanguage}
    >
        <option value="fa">{t('FA')}</option>
        <option value="fa">{t('en')}</option>
    </select>
  )
}

export default LanguageToggle