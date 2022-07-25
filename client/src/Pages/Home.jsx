import React, {useState, useEffect} from 'react';
import Dots from '../Components/Dots/Dots';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Logo from '../Assets/img/bg-img.jpg';
import darkLogo from '../Assets/icons/cart.svg';
import { sliderImages} from '../Components/sliderImages';
import Slider from '../Components/SubComponents/Slider/Slider';

export default function Home() {


  return (
    <div className={style.page}>
        <Nav/>
        <Slider/>

    </div>
  )
}
