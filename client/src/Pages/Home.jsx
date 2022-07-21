import React, {useState, useEffect} from 'react';
import Dots from '../Components/Dots/Dots';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Logo from '../Assets/img/bg-img.jpg';
import darkLogo from '../Assets/icons/cart.svg';

export default function Home() {

    const images = [Logo, darkLogo];
    const [ image, setImage ] = useState(0);

  return (
    <div className={style.page}>
        <Nav/>
        {/* <div className={style.overlay}> */}
        <img
            src={ images[image] }
            alt=""
            className={style.sliderImg}
        />
        {/* </div> */}
        <Dots
            images={ images }
            imageNum = {value => setImage(value)}
        />
    </div>
  )
}
