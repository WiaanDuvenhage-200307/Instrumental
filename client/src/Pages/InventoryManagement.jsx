import React, {useEffect, useState} from 'react';
import Footer from '../Components/UI/Footer/Footer';
import Nav from '../Components/UI/Nav/Nav';
import style from './InventoryManagement.module.scss';
import img from '../Assets/inventory-management-illustration.svg';
import Button from '../Components/UI/Button/Button';
import Chart from '../Components/SubComponents/Chart/Chart';
import Input from '../Components/UI/Input/Input';
import axios from 'axios';
import UpdateModal from '../Components/SubComponents/UpdateModal/UpdateModal';

export default function InventoryManagement(props) {

    const [products, setProducts] = useState([]);

    const [modal, setModal] = useState();
    useEffect(() =>{
        document.title = "Inventory Management "
    }, [])


    useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            console.log(productData);
            setProducts(productData);
        })
        .catch(err => console.log(err))
    }, [])

    const update = () => {
        setModal(<UpdateModal/>)
    }

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
                    {products.map(i => (<tr>
                      <td>{i.brand} {i.model}</td>
                        <td>{i.type}</td>
                        <td>{i.inStock}</td>
                        <td>{props.color}</td>
                        <td className={style.flexCol}><Button type="primary" onClick={update} text="Update"/><br /><p>Delete</p></td>
                    </tr>))}
                </table>

            </div>
            <div className={style.right}>
                <Chart/>
            </div>
        </div> 
    </div>
  )
}
