import React, {forwardRef} from 'react';
import style from './Input.module.scss'

// TODO: ForwardRef | Scale Input Down
const Input =  forwardRef((props, ref) => {
    return (
      <input
          type={props.type}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          name={props.name}
          className={style.input}
          id={props.id}
          onChange={props.onChange}
          ref={ref}
          onKeyPress={props.onKeyPress}
      />
    )
  });
  
  export default Input;
