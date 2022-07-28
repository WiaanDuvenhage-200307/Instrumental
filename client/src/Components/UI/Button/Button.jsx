import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <button
        className={`
        ${props.className ? props.classname : ""}
        ${props.type == "primary" ? style.primary : props.type == "secondary" ? style.secondary : style.tersiary}
        `} 
        onClick={props.onClick}>
            {props.text}
        </button>
  )
}
