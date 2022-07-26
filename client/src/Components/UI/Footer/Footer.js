import React from 'react'
import style from './Footer.module.scss';
import logo from '../../../Assets/logo-dark.svg';
import twitter from '../../../Assets/twitter.svg';
import instagram from '../../../Assets/instagram.svg';
import facebook from '../../../Assets/facebook.svg';
import Input from '../Input/Input';

export default function Footer() {
  return (
    <div className={style.container}>
        <img src={logo} width={100}/>

        <div className={style.socialContainer}>
            <img src={twitter} width={20}/>
            <img src={instagram} width={20}/>
            <img src={facebook} width={20}/>
        </div>

        <div className={style.emailContainer}>
            <label htmlFor='email'>Email Us</label>
            <Input placeholder="someone@gmail.com"/>
        </div>
    </div>
  )
}
