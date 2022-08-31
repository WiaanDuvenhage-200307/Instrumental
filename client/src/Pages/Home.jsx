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

    const [products, setProducts] = useState();

    const images = sliderImages

    useEffect(() =>{
        document.title = "Instrumental | Home"
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            console.log(productData);
            let renderProducts = productData.map(i => <Card key={i._id} productId={i._id} brand={i.brand} model={i.model} price={i.price} imgUrl={i.imgUrl[0]}/>)
            setProducts(renderProducts);
            console.log(products);
        })
        .catch(err => console.log(err))
    }, [])

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
            {products}
        </div>

        <div className={style.lowStockCon}>
            <h3 className={style.heading}>While Stocks Last</h3>
            <div className={style.cardCon}>
                {products}
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
