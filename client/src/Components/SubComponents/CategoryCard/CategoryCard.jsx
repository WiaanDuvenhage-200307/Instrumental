import React from 'react';
import style from './CategoryCard.module.scss';
import img from '../../../Assets/img/card-item.jpg';

export default function CategoryCard(props) {
  return (
    <div className={style.container}>
        <h4>{props.text}</h4>
    </div>
  )
}
