import React, {useState} from 'react'
import style from './UpdateModal.module.scss';
import Input from '../../UI/Input/Input';
import axios from 'axios';
import { useEffect } from 'react';

export default function UpdateModal(props) {

    console.log(props);

    let editProductDetails = {
        brand: props.brand, 
        model: props.model, 
        type: props.type, 
        price: props.price, 
        discountPrice: props.discountPrice,
        inStock: props.inStock,
        desc: props.desc
    }

    const [editVal, setEditVal] = useState(editProductDetails);

    const updateValues  = e => {
        const {name, value} = e.target;
        setEditVal({...editVal, [name]: value});
        console.log(editVal);
    
    }

    // const updateUser = e => {
    //     e.preventDefault();
    //     let userId = props.id;
    //     let payload = editVal;
    //     axios.patch('http://localhost:5000/api/updateuser/' + userId, payload)
    //     .then( res => {
    //         if(res){
    //             console.log('user updated!');
    //             props.close();
    //             window.location.reload();
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    const closeModal = () => {
        props.close();
    }


  return (
    <div className={style.container}>
    <div className={style.modal}>
        <h1>Update Guitar</h1>
    <form className={style.form}>
        <div className={style.flex}>
    <Input
        name="brand"
        defaultValue={props.brand}
        placeholder="Brand"
        onChange={updateValues} 
    />
    <Input
        name="model"
        defaultValue={props.model}
        placeholder="Model"
        onChange={updateValues} 
    />
    </div>
    <div className={style.flex}>
        <Input
            name="type"
            defaultValue={props.type}
            placeholder="Type"
            onChange={updateValues} 
        />
        <Input
            name="price"
            defaultValue={props.price}
            placeholder="Price"
            onChange={updateValues} 
        />
        <Input
            name="discountPrice"
            defaultValue={props.discountPrice}
            placeholder="Discount Price"
            onChange={updateValues} 
        />
    </div>
    <div className={style.flex}>
        <div className={style.flexMini}>
            <Input
                name="inStock"
                defaultValue={props.inStock}
                placeholder="In Stock"
                onChange={updateValues}  
            />
            <Input
                name="desc"
                defaultValue={props.desc}
                placeholder="Description"
                onChange={updateValues} 
            />
        <button className={style.updateBtn}>
            <p className={style.btnText}>Update User</p>
        </button>
        <p onClick={closeModal}>Cancel</p>
    </div>
    </div>
    </form>
    </div>    
    </div>
  )
}
