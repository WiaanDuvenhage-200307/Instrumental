import React, {useEffect} from 'react';
import style from './OrderProcessing.module.scss';
import Nav from '../Components/UI/Nav/Nav';

export default function OrderProcessing() {

    useEffect(() =>{
        document.title = "Order Processing"
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
        <h2>This is the order processing page</h2>
    </div>
  )
}
