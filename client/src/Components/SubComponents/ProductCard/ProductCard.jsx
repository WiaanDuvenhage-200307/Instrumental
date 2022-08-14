import React from 'react';
import style from './ProductCard.module.scss';
import img from '../../../Assets/img/acoustic-1.jpg';

export default function ProductCard(props) {
  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img src={props.img}/>
        </div>
        <div className={style.descContainer}>
            <h5>{props.brand} {props.model}</h5>
            <p>R{props.price}</p>
        </div>
    </div>
  )
}
