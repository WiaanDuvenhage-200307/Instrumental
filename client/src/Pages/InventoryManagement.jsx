import React, {useEffect} from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './InventoryManagement.module.scss';

export default function InventoryManagement() {

    useEffect(() =>{
        document.title = "Inventory Management "
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
        <h2>This is the Inventory Management Page</h2> 
    </div>
  )
}
