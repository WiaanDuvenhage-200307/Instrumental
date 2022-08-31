import React from 'react';
import Button from '../../UI/Button/Button';
import style from './Card.module.scss';
import cardImg from '../../../Assets/img/card-item.jpg';

export default function Card(props) {
  return (
    <div className={style.cardContainer}>

        <div className={style.imgContainer}>
            <p className={style.stockWarning}>5 Left</p>
            <img src={props.imgUrl}/>
        </div>

        <div className={style.bottomContainer}>

            <div className={style.itemName}>
                <h4>{props.brand} {props.model}</h4>
                <div className={style.priceContainer}>
                    <h4 className={style.prevPrice}>{props.price}</h4>
                    <h4 className={style.discountPrice}>{props.discountPrice}</h4>
                </div>

            </div>

            <div className={style.buttonWrapper}>
                <p>View More</p>
                <Button text="Add to Cart" type="secondary"/>
            </div>

        </div>


    </div>
  )
}
