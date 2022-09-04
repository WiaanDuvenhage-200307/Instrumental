import React from 'react';
import Button from '../../UI/Button/Button';
import style from './Card.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {

    const navigate = useNavigate();

    const goToGuitar = () => {
      var thisThing = sessionStorage.setItem('productId', props.productId);
      console.log(thisThing);
      navigate('/individual-product');
    }

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
                    { props.discountPrice ? <h4 className={style.prevPrice}>R{props.price}</h4> : <h4 className={style.discountPrice}>{props.discountPrice}</h4>}
                    { props.discountPrice ? <h4 className={style.discountPrice}>R{props.discountPrice}</h4> : <h4 className={style.discountPrice}>R{props.price}</h4>}
                </div>

            </div>

            <div className={style.buttonWrapper}>
                <p onClick={goToGuitar}>View More</p>
                <Button text="Add to Cart" type="secondary"/>
            </div>

        </div>


    </div>
  )
}
