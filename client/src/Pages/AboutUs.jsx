import React, {useEffect} from 'react'
import Nav from '../Components/UI/Nav/Nav';
import style from './AboutUs.module.scss';

export default function AboutUs() {

    useEffect(() =>{
        document.title = "Instrumental | About Us"
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
        <h2>This is the About Us Page</h2>
    </div>
  )
}
