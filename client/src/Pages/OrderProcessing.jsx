import React, {useEffect} from 'react';
import style from './OrderProcessing.module.scss';
import Nav from '../Components/UI/Nav/Nav';
import Footer from '../Components/UI/Footer/Footer';
import Button from '../Components/UI/Button/Button';

export default function OrderProcessing() {

    useEffect(() =>{
        document.title = "Order Processing"
     }, [])

  return (
        <div className={style.container}>
        <Nav/>

        <div className={style.pageContent}>
            <div className={style.left}>
                <h4 className={style.leftHeading}>Our Orders</h4>
                <div className={style.ordersSummaryGroup}>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                </div>


            </div>
            <div className={style.right}>
                <h2>Our Orders</h2>
                <table className={style.table}>
                    <thead>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Color</th>
                        <th>Date</th>
                    </thead>
                    <br />
                    <hr />
                    <tr>
                        <td>#832h3vh231h</td>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>Red</td>
                        <td>09-05-2020</td>
                        <td className={style.flexCol}><Button type="tersiary" text="Dispatch"/></td>
                    </tr>
                    <tr>
                        <td>#832h3vh231h</td>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>Red</td>
                        <td>09-05-2020</td>
                        <td className={style.flexCol}><Button type="tersiary" text="Dispatch"/></td>
                    </tr>
                    <tr>
                        <td>#832h3vh231h</td>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>Red</td>
                        <td>09-05-2020</td>
                        <td className={style.flexCol}><Button type="tersiary" text="Dispatch"/></td>
                    </tr>
                    <tr>
                        <td>#832h3vh231h</td>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>Red</td>
                        <td>09-05-2020</td>
                        <td className={style.flexCol}><Button type="tersiary" text="Dispatch"/></td>
                    </tr>
                
                </table>
            </div>
        </div>
    </div>
  )
}
