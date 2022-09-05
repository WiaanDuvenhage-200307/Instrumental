import React from 'react';
import Button from '../../UI/Button/Button';
import style from './OrderItem.module.scss';

export default function OrderItem(props) {

    const dispatch = () => {
        console.log("Dispatched!");
    }

  return (
    <div className={style.orderCard}>
        <p>Order #{props.id}</p>
        <p>{props.brand} {props.model}</p>
        {props.qty}
        <p>{props.date}</p>
        <p>{props.name} {props.surname}</p>
        <Button onClick={dispatch} type="tersiary" text="Dispatch"/>
    </div>
  )
}
