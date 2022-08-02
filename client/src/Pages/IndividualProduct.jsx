import React, { useState } from 'react'
import Footer from '../Components/UI/Footer/Footer';
import Nav from '../Components/UI/Nav/Nav';
import style from './IndividualProduct.module.scss';
import arrowLeft from '../Assets/icons/arrow-left.svg';
import productImg from '../Assets/img/card-item.jpg';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/UI/Button/Button';
import minus from '../Assets/icons/minus.svg';
import plus from '../Assets/icons/plus.svg';
import ColorPicker from '../Components/SubComponents/ColorPicker/ColorPicker';
import Pill from '../Components/UI/Pill/Pill';

export default function IndividualProduct() {

    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const addToCart = () => {
        alert("Gibson ES-335 has been added to cart!");
    }

  return (
    <div className={style.container}>
        <Nav/>

        <div className={style.pageContent}>



            <div className={style.left}>

                <div className={style.goBack} onClick={() => navigate(-1)}>
                    <img src={arrowLeft}/>  
                    <p className={style.pBlue}>Go Back</p>
                </div>

                <div className={style.productImg}>
                    <img src={productImg}/>
                </div>
                <br />
                <p className={style.lowStock}>Only 2 Left!</p>
                <hr />
                <p className={style.pBlue}>Quantity</p>
                <div className={style.flex}>
                    {qty == 1 ? <img className={style.disabled} src={minus} width={20}/> : <img src={minus} width={20} onClick={() => setQty(qty - 1)}/>}
                    <h4 className={style.qty}>{qty}</h4>
                    <img src={plus} width={20} onClick={() => setQty(qty + 1)}/>
                </div>
                <hr />
                <p className={style.pBlue}>Select a color</p>
                <div className={style.flex}>
                    <ColorPicker/>
                    <ColorPicker/>
                    <ColorPicker/>
                </div>
                <hr />
                <p className={style.pBlue}>Select Neck Height</p>
                <div className={style.flexPill}>
                    <Pill text="545mm"/>
                    <Pill text="545mm"/>
                    <Pill text="545mm"/>
                </div>
                <hr />
                <Button text="Add to Cart" type="addToCart" onClick={addToCart}/>
            </div>

            <div className={style.right}>
                <h3>Gibson ES-335</h3>
                <h4>Electric Guitar</h4>
                <div className={style.flex}>
                    <h3 className={style.oldPrice}>R12,600</h3>
                    <h3 className={style.totalPrice}>R8,000</h3>
                </div>
                <br />
                <p className={style.aboutProductHeading}>About The Product</p>
                <br />
                <p className={style.desc}>The Gibson ES-335 DOT is the cornerstone of the Gibson ES line-up.
                From its inaugural appearance in 1958, the Gibson ES-335 set an unmatched standard.
                The pearloid dot inlay rosewood fingerboard on a hand-rolled Rounded 'C' mahogany neck remind players where it all started. Gibson's Calibrated T-Type humbucking pickups are paired with our hand-wired control assembly.
                The result is that versatile Gibson ES tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Vintage Deluxe tuners with Keystone buttons,
                 paired with light weight Aluminum ABR-1 bridge and Stop Bar tailpiece, anchored by steel thumb-wheels and tailpiece studs.</p>
                 <br />
                 <br />
                 <div className={style.flexDesc}>
                    <div className={style.column}>
                        <h3>335</h3>
                        <h4 className={style.pBlue}>Body Shape</h4>
                    </div>
                    <div className={style.column}>
                        <h3>Mahogany</h3>
                        <h4 className={style.pBlue}>Neck Material</h4>
                    </div>
                    <div className={style.column}>
                        <h3>22</h3>
                        <h4 className={style.pBlue}>Frets</h4>
                    </div>
                    <div className={style.column}>
                        <h3>Gold</h3>
                        <h4 className={style.pBlue}>Strings</h4>
                    </div>

                 </div>
            </div>

        </div>


        <Footer/>
    </div>
  )
}
