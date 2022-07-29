import React, {forwardRef} from 'react';
import style from './Input.module.scss'

// TODO: ForwardRef | Scale Input Down
const Input =  forwardRef((props, ref) => {
    return (
      <input
          type={props.inputType}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          name={props.name}
          className={`
            ${props.className ? props.classname : ""}
            ${props.type == "primary" ? style.primary : props.type == "secondary" ? style.secondary : style.tersiary}
          `} 
          id={props.id}
          onChange={props.onChange}
          ref={ref}
          onKeyPress={props.onKeyPress}
      />
    )
  });
  
  export default Input;
