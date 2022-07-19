import React from 'react';
import style from './Button.module.scss'

// TODO: Scale Down
export default function Button(props) {
  return (
    <button className={style.primBtnW} onClick={props.onClick}>{props.text}</button>
  )
}
