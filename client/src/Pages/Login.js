import React, {useState, useEffect, useRef} from 'react'
import style from './Login.module.scss';
import logo from '../Assets/logo-light.svg';
import bgImg from '../Assets/img/bg-img.jpg';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';

export default function Login() {

    const emailInput = useRef();
    const passwordInput = useRef();
    const [emailWarn, setEmailWarn] = useState();
    const [passwordWarn, setPasswordWarn] = useState();


    // let password = passwordInput.current.value;

    const handleForm = () => {
        let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let email = emailInput.current.value;
        console.log(email);
        if(!email.match(mailRegex)){
            setEmailWarn(`Email is incorrect! Try Again`)
        }else{
            setEmailWarn("");
        }

        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        let password = passwordInput.current.value;
        console.log(password);
        if(!password.match(passRegex)){
            setPasswordWarn(`Password is incorrect! Try again`)
        }else{
            setPasswordWarn("");
        }
    }

  return (
    <div className={style.page}>

        <div className={style.left}>
            <div className={style.bgImg}><img src={bgImg} alt="bg_img"/></div>
            <img className={style.logo} src={logo} width={400} alt="Instrumental_Logo"/>
        </div>

        <div className={style.right}>
            <h3 className={style.heading}>LOG IN</h3>
            <h4 className={style.subText}>Welcome Back to Instrumental! <br /> Enter your details below</h4>
            <div className={style.flex}>
                <Input 
                    placeholder="someone@gmail.com"
                    type="email"
                    ref={ emailInput }
                />
                <p className={style.emailWarn}>{emailWarn}</p>
            </div>
            <br />
            <div className={style.flex}>
                <Input 
                    placeholder="Password" 
                    type="password"
                    ref={ passwordInput }
                />
                <p className={style.passwordWarn}>{passwordWarn}</p>
            </div>
            <br />
            <Button text="Log In" onClick={ handleForm }/>
            <br />
            <img src={logo} width={150}/>
        </div>
    </div>
  )
}
