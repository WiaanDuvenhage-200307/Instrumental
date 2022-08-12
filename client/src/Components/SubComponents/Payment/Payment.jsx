import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import style from './Payment.module.scss';

export default function Payment() {
  return (
    <div className={style.container}>
        <h3 className={style.heading}>Payment Details</h3>
        <p className={style.subheading}>Enter your payment details to conclude your order</p>

        <label htmlFor='name'>Name</label>
        <Input name="name" type="paymentInput" placeholder="Name on Card"/>

        <label htmlFor='name'>Account Number</label>
        <Input name="name" type="paymentInput" placeholder="XXXX-XXXX-XXX-XX" inputType="number"/>

        <div className={style.flex}>

            <div className={style.flexCol}>
                <label htmlFor='name'>Expiration Date</label>
                <Input name="name" type="paymentInput" placeholder="Name on Card" inputType="date"/>
            </div>

            <div className={style.flexCol}>
            <label htmlFor='name'>CVV</label>
            <Input name="name" type="paymentInput" placeholder="XXX" inputType="number" max="3"/>
            </div>


        </div>

        <Button text="Checkout" type="primary"/>


    </div>
  )
}
