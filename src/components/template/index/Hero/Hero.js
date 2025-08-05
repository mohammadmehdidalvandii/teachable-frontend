 import React from 'react';
import style from './Hero.module.css';
import { FaSearch } from 'react-icons/fa';
 
 function Hero() {
   return (
     <section className={style.hero}>
        <div className="container">
            <div className={style.hero_content}>
              <h2 className={style.hero_title}>اولین گام هر مهارت آموزش دیدن</h2>
              <p className={style.hero_paraph}>در اینجا به صورت ساده آموزش ببین مهارت کسب کن</p>
              <div className={style.hero_search}>
                <input type="text" placeholder='جستجو ...'/>
                <button><FaSearch/></button>
              </div>
            </div>
        </div>
     </section>
   )
 }
 
 export default Hero