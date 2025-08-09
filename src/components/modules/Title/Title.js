import React from 'react';
import style from './Title.module.css';

function Title({title , text}) {
  return (
    <div className={style.title_wrapper}>
        <h6 className={style.title}>{title}</h6>
        <p className={style.paraph}>{text}</p>
    </div>
  )
}

export default Title