import React, {useEffect} from 'react';
import Footer from '../Components/UI/Footer/Footer';
import Nav from '../Components/UI/Nav/Nav';
import style from './InventoryManagement.module.scss';
import img from '../Assets/inventory-management-illustration.svg';
import Button from '../Components/UI/Button/Button';
import Chart from '../Components/SubComponents/Chart/Chart';
import Input from '../Components/UI/Input/Input';

export default function InventoryManagement() {

    useEffect(() =>{
        document.title = "Inventory Management "
     }, [])

  return (
    <div className={style.container}>
        <Nav/>

        <div className={style.pageContent}>
            <div className={style.left}>
                <h2 className={style.heading}>Our Stock</h2>
                <p className={style.subHeading}>Welcome to the Inventory Management Page</p>
                <br />
                <p>Take a look at our inventory of guitars, you can update delete and add new guitars here!</p>
                <br />
                <br />
                <br />
                <br />
                <div className={style.addBtnCon}>
                    <Button type="primary" text="New Product"/>
                    <Input type="filterInput" placeholder="Filter Stock..."/>
                </div>
                <table className={style.table}>
                    <thead>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Qty</th>
                        <th>Color</th>
                    </thead>
                    <tr>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>25</td>
                        <td>Red</td>
                        <td className={style.flexCol}><Button type="primary" text="Update"/><br /><p>Delete</p></td>
                    </tr>
                    <tr>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>25</td>
                        <td>Red</td>
                        <td className={style.flexCol}><Button type="primary" text="Update"/><br /><p>Delete</p></td>
                    </tr>
                    <tr>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>25</td>
                        <td>Red</td>
                        <td className={style.flexCol}><Button type="primary" text="Update"/><br /><p>Delete</p></td>
                    </tr>
                    <tr>
                        <td>Gibson ES-335</td>
                        <td>Electric</td>
                        <td>25</td>
                        <td>Red</td>
                        <td className={style.flexCol}><Button type="primary" text="Update"/><br /><p>Delete</p></td>
                    </tr>
                
                </table>

            </div>
            <div className={style.right}>
                <Chart/>
            </div>
        </div> 
    </div>
  )
}
