import React from 'react';
import style from './ProductCard.module.scss';
import img from '../../../Assets/img/acoustic-1.jpg';

export default function ProductCard() {
  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img src={img}/>
        </div>
        <div className={style.descContainer}>
            <h5>Gibson ES-335</h5>
            <p>R5600</p>
        </div>
    </div>
  )
}
