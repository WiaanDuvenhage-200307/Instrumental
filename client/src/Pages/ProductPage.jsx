import React, {useEffect} from 'react';
import ProductCard from '../Components/SubComponents/ProductCard/ProductCard';
import Nav from '../Components/UI/Nav/Nav';
import style from './ProductPage.module.scss';
import headerImg from '../Assets/img/guitar.png';
import FilterCard from '../Components/SubComponents/FilterCard/FilterCard';
import Footer from '../Components/UI/Footer/Footer';
import Filter from '../Components/SubComponents/Filter/Filter';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function ProductPage() {

    const [products, setProducts] = useState();


    useEffect(() =>{
        document.title = "Instrumental | Our Products"
     }, [])

     useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            console.log(productData);
            let renderProducts = productData.map(i => <ProductCard key={i._id} brand={i.brand} model={i.model} price={i.price} img={i.imgUrl[0]}/>)
            setProducts(renderProducts);
            console.log(products);
        })
        .catch(err => console.log(err))
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
            <header>
                <div className={style.overlay}>

                    <div className={style.headerText}>
                        <h2>Our Guitars</h2>
                        <h4>Browse all our guitars for all of your musical needs. We have everything from electric to banjo</h4>
                    </div>
                </div>
            </header>
        <div className={style.pageContent}>
            <h3 className={style.quickFilter}>Quick Filter</h3>
            <div className={style.quickFilterContainer}>
                <FilterCard text="Acoustic"/>
                <FilterCard text="Electric"/>
                <FilterCard text="Bass"/>
            </div>

            <hr />

            <div className={style.row}>

                <Filter/>

                <div className={style.productsContainer}>
                    {products}
                </div>
                
            </div>

        </div>
        <Footer/>
    </div>
  )
}
