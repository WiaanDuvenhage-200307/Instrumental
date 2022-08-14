import React, {useState, useEffect} from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Slider from '../Components/SubComponents/Slider/Slider';
import Card from '../Components/SubComponents/Card/Card';
import Footer from '../Components/UI/Footer/Footer';
import { sliderImages } from '../Components/sliderImages';
import axios from 'axios';
import Button from '../Components/UI/Button/Button';
import { Link } from 'react-router-dom';
import CartModal from '../Components/SubComponents/CartModal/CartModal';

export default function Home() {

    const [ modalOpen, setModalOpen ] = useState(false);

    const images = sliderImages

    useEffect(() =>{
        document.title = "Instrumental | Home"
     }, [])

     useEffect(() => {
        
     })

  return (
    <div className={style.page}>
        <Nav openTheModal={value /*true*/ => setModalOpen(value)}/>
        {
            modalOpen
            ?   <CartModal
                    //We can retrieve the value from 
                    // the Modal component that we passed into
                    // the prop and store it in the useState created above
                    // this value was false
                closeTheModal={value /*false*/ => setModalOpen(value)}
            />
            : ''
        }
        <Slider/>
        <div className={style.cardCon}>

            {images.map(item => <Card imgUrl={item.url}/>)}

        </div>

        <div className={style.lowStockCon}>
            <h3 className={style.heading}>While Stocks Last</h3>
            <div className={style.cardCon}>
                {images.map(item => <Card imgUrl={item.url}/>)}
            </div>

        </div>

        <div className={style.bottomSection}>
            <h4 className={style.bottomSection_heading}>Not finding what you are looking for?</h4>
            <Link to="/products"><Button text="Browse Now" type="browseNow"/></Link>
        </div>

        <Footer/>

    </div>
  )
}
