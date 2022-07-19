import React from 'react';
import style from './Input.module.scss'

// TODO: ForwardRef | Scale Input Down
export default function Input(props) {
  return (
    <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
        type={props.type}
        className={style.input}
        id={props.id}
    />
  )
}
