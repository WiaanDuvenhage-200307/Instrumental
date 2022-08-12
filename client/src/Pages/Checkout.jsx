import React from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Checkout.module.scss';
import img from '../Assets/img/acoustic-1.jpg';
import trash from '../Assets/icons/trash.svg';
import Payment from '../Components/SubComponents/Payment/Payment';

export default function Checkout() {
  return (
    <div className={style.container}>
        <Nav/>
        <div className={style.pageContent}> 
            <div className={style.left}>
                <h2 className={style.heading}>Shopping Cart</h2>
                <p className={style.subheading}>Ensure all of the below products are correct and enter your payment details below</p>
                <table>
                    <thead>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Color</th>
                        <th>Total</th>
                    </thead>
                    <tr>
                        <td className={style.productImg}><img src={img} width={150}/></td>
                        <td>Gibson ES-335</td>
                        <td>1</td>
                        <td>Red</td>
                        <td>R35 000</td>
                        <td><img src={trash}/></td>
                    </tr>
                </table>
            </div>
            <div className={style.right}>
                <Payment/>
            </div>
        </div>

    </div>
  )
}
