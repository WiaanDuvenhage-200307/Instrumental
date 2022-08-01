import React, {useEffect} from 'react';
import ProductCard from '../Components/SubComponents/ProductCard/ProductCard';
import Nav from '../Components/UI/Nav/Nav';
import style from './ProductPage.module.scss';
import headerImg from '../Assets/img/guitar.png';
import FilterCard from '../Components/SubComponents/FilterCard/FilterCard';
import Footer from '../Components/UI/Footer/Footer';
import Filter from '../Components/SubComponents/Filter/Filter';

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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                
            </div>




        </div>
        <Footer/>
    </div>
  )
}
