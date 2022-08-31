import React from 'react';
import style from './ProductCard.module.scss';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {

  const navigate = useNavigate();

  const goToGuitar = () => {
    var thisThing = sessionStorage.setItem('productId', props.productId);
    console.log(thisThing);
    navigate('/individual-product');
  }

  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img src={props.img}/>
        </div>
        <div className={style.descContainer}>
            <h5>{props.brand} {props.model}</h5>
            <p>R{props.price}</p>
        </div>
        <Button text="view more" type="secondary" onClick={goToGuitar}/>
    </div>
  )
}
