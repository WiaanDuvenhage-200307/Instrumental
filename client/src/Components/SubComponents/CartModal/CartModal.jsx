import React from 'react';
import style from './CartModal.module.scss';
import img from '../../../Assets/img/acoustic-1.jpg';
import trash from '../../../Assets/icons/trash-light.svg';
import Button from '../../UI/Button/Button';

export default function CartModal() {

    // TODO: Fix checkout button to remain fixed
  return (
    <div className={style.container}>
        
        <table className={style.cartItems}>
            <thead>
                <th className={style.cartHeading}></th>
                <th className={style.cartHeading}>Product</th>
                <th className={style.cartHeading}>Color</th>
                <th className={style.cartHeading}>Qty</th>
                <th className={style.cartHeading}>Total</th>
            </thead>
            <tr>
                <td><img src={img} width={70}/></td> 
                <td><p>Gibson ES-335</p></td> 
                <td><p>Red</p></td> 
                <td><p>1</p></td> 
                <td><p className={style.totalPrice}>R42 000</p></td>  
                <td><img src={trash} width={20}/></td>  
            </tr>
            <hr className={style.cartDivider}/>
            <tr>
                <td><img src={img} width={70}/></td> 
                <td><p>Gibson ES-335</p></td> 
                <td><p>Red</p></td> 
                <td><p>1</p></td> 
                <td><p className={style.totalPrice}>R42 000</p></td>  
                <td><img src={trash} width={20}/></td>  
            </tr>
            <hr className={style.cartDivider}/>
            <tr>
                <td><img src={img} width={70}/></td> 
                <td><p>Gibson ES-335</p></td> 
                <td><p>Red</p></td> 
                <td><p>1</p></td> 
                <td><p className={style.totalPrice}>R42 000</p></td>  
                <td><img src={trash} width={20}/></td>  
            </tr>
            <hr className={style.cartDivider}/>
            <tr>
                <td><img src={img} width={70}/></td> 
                <td><p>Gibson ES-335</p></td> 
                <td><p>Red</p></td> 
                <td><p>1</p></td> 
                <td><p className={style.totalPrice}>R42 000</p></td>  
                <td><img src={trash} width={20}/></td>  
            </tr>
            <hr className={style.cartDivider}/>
            <tr>
                <td><img src={img} width={70}/></td> 
                <td><p>Gibson ES-335</p></td> 
                <td><p>Red</p></td> 
                <td><p>1</p></td> 
                <td><p className={style.totalPrice}>R42 000</p></td>  
                <td><img src={trash} width={20}/></td>  
            </tr>
            <hr className={style.cartDivider}/>
        </table>
        <Button text="Go To Checkout" type="primary"/>
    </div>
  )
}
