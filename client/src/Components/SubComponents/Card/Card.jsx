import React from 'react';
import Button from '../../UI/Button/Button';
import style from './Card.module.scss';
import cardImg from '../../../Assets/img/card-item.jpg';

export default function Card(props) {
  return (
    <div className={style.cardContainer}>

        <div className={style.imgContainer}>
            <img src={props.imgUrl}/>
        </div>

        <div className={style.bottomContainer}>

            <div className={style.itemName}>
                <h4>Gibson ES-335</h4>
                <div className={style.priceContainer}>
                    <h4 className={style.prevPrice}>R 3 500</h4>
                    <h4 className={style.discountPrice}>R 3 000</h4>
                </div>

            </div>

            <div className={style.buttonWrapper}>
                <p>View More</p>
                <Button text="Add to Cart" className={style.addToCartBtn}/>
            </div>

        </div>


    </div>
  )
}
