import React, {useEffect} from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './ProductPage.module.scss';

export default function ProductPage() {

    useEffect(() =>{
        document.title = "Instrumental | Our Products"
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
        <h3>This is the product page</h3>
    </div>
  )
}
