import React from 'react'
import style from './Login.module.scss';
import logo from '../Assets/logo-light.svg';
import bgImg from '../Assets/img/bg-img.jpg';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';

export default function Login() {
  return (
    <div className={style.page}>

        <div className={style.left}>
            <div className={style.bgImg}><img src={bgImg} alt="bg_img"/></div>
            <img className={style.logo} src={logo} width={400} alt="Instrumental_Logo"/>
        </div>

        <div className={style.right}>
            <h3 className={style.heading}>LOG IN</h3>
            <h4 className={style.subText}>Welcome Back to Instrumental! <br /> Enter your details below</h4>
            <Input placeholder="someone@gmail.com" type="email"/>
            <Input placeholder="Password" type="password"/>
            <Button text="Log In"/>
            <br />
            <img src={logo} width={150}/>
        </div>
    </div>
  )
}
