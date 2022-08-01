import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <button
        className={`
        ${props.className ? props.classname : ""}
        ${props.type == "primary" ? style.primary : props.type == "secondary" ? style.secondary : props.type == "loginPageBtn" ? style.loginPageBtn : props.type == "priceFilterBtn" ? style.priceFilterBtn : props.type == "addToCart" ? style.addToCart : style.tersiary}
        `} 
        onClick={props.onClick}>
            {props.text}
        </button>
  )
}
