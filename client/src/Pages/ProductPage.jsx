import React, {useEffect} from 'react';
import ProductCard from '../Components/SubComponents/ProductCard/ProductCard';
import Nav from '../Components/UI/Nav/Nav';
import style from './ProductPage.module.scss';
import headerImg from '../Assets/img/guitar.png';

export default function ProductPage() {

    useEffect(() =>{
        document.title = "Instrumental | Our Products"
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
            <header>
                <div className={style.overlay}>

                    <div className={style.headerText}>
                        <h2>Our Products</h2>
                        <h4>Browse all our products for all of your musical needs. We have everything from guitars to audio headphones</h4>
                    </div>
                </div>
            </header>
        <h3>This is the product page</h3>
        <ProductCard/>
    </div>
  )
}
