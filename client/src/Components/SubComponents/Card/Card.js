import React from 'react';
import style from './Card.module.scss';

export default function Card(props) {
  return (
    <div className={style.container}>
        <p className={style.bodyText}>This is a card component</p>
    </div>
  )
}
