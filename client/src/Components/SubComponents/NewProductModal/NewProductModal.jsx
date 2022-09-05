import React, { useState } from 'react';
import axios from 'axios';
import style from './NewProductModal.module.scss';
import Input from '../../UI/Input/Input';

export default function NewProductModal(props) {

    const defValues = ["brand", "model", "type", "price", "discountPrice", "inStock", "desc", "neckLength", "handedness", "colorOne", "colorTwo", "colorThree"] 

    const [imageName, setImageName] = useState("Image name will appear here");
    const [productImage, setProductImage] = useState();

    const [values, setValues] = useState(defValues);

    const [updateUsers, setUpdateUsers] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]: value,
        });
        console.log(values);
    };

    const getImage = (e) => {
        // This is where Multer comes in
      
        let imageFile = e.target.files[0];
        setProductImage(imageFile);
      
        let value = e.target.value;
        let imgName = value.substring(12);
        setImageName(imgName);
      
        let reader = new FileReader();
        reader.onload = () => {
          let output = document.getElementById('imgPrev');
        };
      
        reader.readAsDataURL(e.target.files[0]);
      
    }

    const addProduct = (e) => {
        e.preventDefault();

        const payloadData = new FormData();

        let payload = {
            brand: values["brand"],
            model: values["model"],
            type: values["type"],
            price: +values["price"],
            discountPrice: +values["discountPrice"],
            inStock: +values["inStock"],
            desc: values["desc"],
            productDetails: {
                neckLength: +values["neckLength"],
                handedness: values["handedness"],
                variations: [
                    values["colorOne"],
                    values["colorTwo"],
                    values["colorThree"]
                ]
            }
        }

        payloadData.append('information', JSON.stringify(payload));
        payloadData.append('image', productImage)

        console.log(payload);

        axios.post('http://localhost:5000/api/addproduct', payloadData)
        .then(res => {
            console.log("Guitar Added");
        })
        .catch(err => console.log(err));
    }

    const closeModal = () => {
        props.close();
    }

  return (
    <div className={style.container}>
    <div className={style.modal}>
        <h1>Add Guitar</h1>
    <form className={style.form} onSubmit={addProduct}>
    <Input inputType="file" onChange={getImage}/>
        <p>{imageName}</p>
    <Input
        name="brand"
        value={values.brand}
        placeholder="Brand"
        onChange={handleInputChange} 
    />
    <Input
        name="model"
        value={values.model}
        placeholder="Model"
        onChange={handleInputChange} 
    />
    <Input
        name="type"
        value={values.type}
        placeholder="Type"
        onChange={handleInputChange} 
    />
    <Input
        name="price"
        value={values.price}
        placeholder="Price"
        onChange={handleInputChange} 
    />
    <Input
        name="discountPrice"
        value={values.discountPrice}
        placeholder="Discount Price"
        onChange={handleInputChange} 
    />
    <Input
        name="inStock"
        value={values.inStock}
        placeholder="In Stock"
        onChange={handleInputChange} 
    />
    <Input
        name="desc"
        value={values.desc}
        placeholder="Description"
        onChange={handleInputChange} 
    />
    <Input
        name="neckLength"
        value={values.neckLength}
        placeholder="Neck Length"
        onChange={handleInputChange} 
    />
    <Input
        name="handedness"
        value={values.handedness}
        placeholder="Handedness"
        onChange={handleInputChange} 
    />
    <Input
        name="colorOne"
        value={values.colorOne}
        placeholder="Color 1"
        onChange={handleInputChange} 
    />
    <Input
        name="colorTwo"
        value={values.colorTwo}
        placeholder="Color 2"
        onChange={handleInputChange} 
    />
    <Input
        name="colorThree"
        value={values.colorThree}
        placeholder="Color 3"
        onChange={handleInputChange} 
    />
    <button className={style.updateBtn}>
        <p className={style.btnText}>Add Guitar</p>
    </button>
    <p onClick={closeModal}>Cancel</p>
    </form>
    </div>    
    </div>
  )
}
