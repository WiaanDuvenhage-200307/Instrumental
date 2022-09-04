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
    const [colors, setColors] = useState();

    const [modal, setModal] = useState();
    useEffect(() =>{
        document.title = "Inventory Management "
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            let variable = productData[0].availStock[0].variations;
            for(let j = 0; j < productData.length; j++){
                let theColors = productData[j].availStock[0].variations[0];
                // console.log(theColors);
                console.log(Object.keys(theColors));
                setColors(Object.keys(theColors));
            }
            // console.log(Object.keys(variable[0]));

            // console.log(variable);
            setProducts(productData);
        })
        .catch(err => console.log(err))
    }, [])

    const addProduct = () => {
        let payload = {
            brand: req.body.brand,
            model: req.body.model,
            type: req.body.type,
            price: +req.body.price,
            discountPrice: +req.body.discountPrice,
            inStock: totalStock,
            desc: req.body.desc,
            imgUrl: [
                req.body.imgUrl[0]
            ],
            availStock: [
                {
                    neckLength: +req.body.neckLength,
                    qty: req.body.availStock.qty,
                    handedness: req.body.handedness,
                    variations: [
                        {
                            colorOne: req.body.colorOne,
                            colorTwo: req.body.colorTwo,
                            colorThree: req.body.colorThree,
                        }
                    ]
                }
            ]
        }

        console.log(payload);

        axios.post('http://localhost:5000/api/addproduct', payload);
    }

    const guitarId = sessionStorage.getItem("guitarId")

    const update = () => {
        // sessionStorage.setItem("guitarId", props.guitarId)
        setModal(<UpdateModal id={props.guitarId} brand={props.brand} close={setModal} model={props.model}/>)
        console.log(props.guitarId);
    }

    const deleteProduct = () => {
        if(window.confirm("You are going to delete: " + props.brand + " " +  props.model + ", are you sure?") === true){
          axios.delete('/api/deleteproduct/' + props.guitarId)
          .then( res => {
            if(res){
              console.log("You have deleted: " + props.model + " " +  props.brand);
              window.location.reload()
            }
          })
          .catch(err => console.log(err));
        }
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
                    <Button type="primary" text="New Product" onClick={addProduct}/>
                    <Input type="filterInput" placeholder="Filter Stock..."/>
                </div>
                <table className={style.table}>
                    <thead>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Qty</th>
                        <th>Color</th>
                    </thead>
                    {products.map(i => (<tr key={i._id} id={i._id} guitarId={props._id}>
                        <td>{i.brand} {i.model}</td>
                        <td>{i.type}</td>
                        <td>{i.inStock}</td>
                        {colors.map(f=> (<td key={f._id}>{f}</td>))}
                        <td key={i._id} id={i._id} guitarId={props._id} className={style.flexCol}><Button type="primary" onClick={update} text="Update"/><br/><p onClick={deleteProduct}>Delete</p></td>
                    </tr>))}
                </table>
            </div>
            <div className={style.right}>
                <Chart/>
            </div>
            {modal}
        </div> 
    </div>
  )
}
