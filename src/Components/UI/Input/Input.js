import React from 'react';

export default function Input(props) {
  return (
    <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
        type={props.type}
        className={props.className}
        id={props.id}
    />
  )
}
