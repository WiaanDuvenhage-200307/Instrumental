import React from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';

export default function Home() {
  return (
    <div className={style.page}>
        <Nav/>
    </div>
  )
}
