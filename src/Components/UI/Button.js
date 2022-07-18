import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <button className={style.loginBtn}>{props.text}</button>
  )
}
