import React from 'react';
import style from './Breadcrumb.module.css';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

function Breadcrumb({title}) {
  return (
    <div className={style.breadcrumb}>
        <div className="container">
            <div className={style.breadcrumb_wrapper}>
                <Link href='/' className={style.breadcrumb_linkBack}><FaHome/></Link>
                
                <p className={style.breadcrumb_title}>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb