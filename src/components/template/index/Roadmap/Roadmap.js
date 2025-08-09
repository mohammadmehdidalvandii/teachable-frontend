import React from 'react';
import style from './Roadmap.module.css';
import Title from '@/components/modules/Title/Title';
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaCode ,FaPython } from 'react-icons/fa';
import { GoShieldLock } from "react-icons/go";
import Link from 'next/link';



function Roadmap() {
  return (
    <section className={style.roadmap}>
        <div className="container">
            <div className={style.roadmap_wrapper}>
                <Title title="نقشــه راه ها" text='نقشه های راه برای شروع اصولی یادگیری'/>
                <div className={style.roadmap_items}>
                    <Link href='' className={style.roadmap_item}>
                        <span className={style.roadmap_icon}><MdOutlineDeveloperMode/></span>
                        <h4 className={style.roadmap_title}>فرانت اند</h4>
                        <p className={style.roadmap_paraph}>20 دوره</p>
                    </Link>
                    <Link href='' className={style.roadmap_item}>
                        <span className={style.roadmap_icon}><FaCode/></span>
                        <h4 className={style.roadmap_title}>بک اند</h4>
                        <p className={style.roadmap_paraph}>15 دوره</p>
                    </Link>
                    <Link href='' className={style.roadmap_item}>
                        <span className={style.roadmap_icon}><GoShieldLock/></span>
                        <h4 className={style.roadmap_title}>امنیت</h4>
                        <p className={style.roadmap_paraph}>12 دوره</p>
                    </Link>
                    <Link href='' className={style.roadmap_item}>
                        <span className={style.roadmap_icon}><FaPython /></span>
                        <h4 className={style.roadmap_title}>پایتون </h4>
                        <p className={style.roadmap_paraph}>22 دوره</p>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Roadmap