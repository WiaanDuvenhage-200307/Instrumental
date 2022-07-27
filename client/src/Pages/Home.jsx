import React, {useState, useEffect} from 'react';
import Dots from '../Components/Dots/Dots';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Logo from '../Assets/img/bg-img.jpg';
import darkLogo from '../Assets/icons/cart.svg';
import { sliderImages} from '../Components/sliderImages';
import Slider from '../Components/SubComponents/Slider/Slider';
import Card from '../Components/SubComponents/Card/Card';
import Footer from '../Components/UI/Footer/Footer';

export default function Home() {


  return (
    <div className={style.page}>
        <Nav/>
        <Slider/>
        <div className={style.cardCon}>
        <Card/>
        <Card/>
        <Card/>
        </div>

        {/* <Footer/> */}

    </div>
  )
}
