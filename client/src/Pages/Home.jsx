import React, {useState, useEffect} from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Slider from '../Components/SubComponents/Slider/Slider';
import Card from '../Components/SubComponents/Card/Card';
import Footer from '../Components/UI/Footer/Footer';
import { sliderImages } from '../Components/sliderImages';
import axios from 'axios';

export default function Home() {

    const images = sliderImages

    useEffect(() =>{
        document.title = "Instrumental | Home"
     }, [])

     useEffect(() => {
        
     })

  return (
    <div className={style.page}>
        <Nav/>
        <Slider/>
        <div className={style.cardCon}>

        {images.map(item => <Card imgUrl={item.url}/>)}

        </div>

        <Footer/>

    </div>
  )
}
