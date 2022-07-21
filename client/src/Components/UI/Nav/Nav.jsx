import React from 'react';
import style from './Nav.module.scss';
import logo from '../../../Assets/logo-light.svg';
import { Link } from 'react-router-dom';
import cart from '../../../Assets/icons/cart.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Nav() {
  return (
    <div className={style.nav}>
        <img className={style.logo} src={logo} width={100} alt="instrumental_logo"/>
        <ul className={style.navItems}>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='/about-us'><li>About Us</li></Link>
        </ul>
        <div className={style.search}>
                <Input placeholder="Search..."/>
        </div>
        <div className={style.flexCol}>
            <Link to='login'><p>Log In</p></Link>
            <Button className={style.smallBtn} text='Register'/>
        </div>
        <img src={cart} width={25}/>
    </div>
  )
}
