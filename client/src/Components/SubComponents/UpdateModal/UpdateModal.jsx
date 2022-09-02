import React from 'react'
import style from './UpdateModal.module.scss';
import Input from '../../UI/Input/Input';

export default function UpdateModal(props) {
  return (
    <div className={style.container}>
    <div className={style.modal}>
        <h1>Update Profile</h1>
    <form className={style.form}>
        <div className={style.flex}>
    <Input
        name="first"
        defaultValue={props.first}
        placeholder="First Name"
        // onChange={updateValues} 
    />
    <Input
        name="last"
        defaultValue={props.last}
        placeholder="Last Name"
        // onChange={updateValues} 
    />
    </div>
    <div className={style.flex}>
        <Input
            name="username"
            defaultValue={props.username}
            placeholder="Username"
            // onChange={updateValues} 
        />
        <Input
            name="occupation"
            defaultValue={props.occupation}
            placeholder="Occupation"
            // onChange={updateValues} 
        />
        <Input
            name="incomePM"
            defaultValue={props.incomePM}
            placeholder="Income"
            // onChange={updateValues} 
        />
    </div>
    <div className={style.flex}>
        <div className={style.flexMini}>
            <Input
                name="age"
                defaultValue={props.age}
                placeholder="Age"
                // onChange={updateValues}  
            />
            <Input
                name="sex"
                defaultValue={props.sex}
                placeholder="Gender"
            // onChange={updateValues} 
            />
        </div>
        <div className={style.flexMini}>
            <Input
                name="height"
                defaultValue={props.height}
                placeholder="Height"
                // onChange={updateValues} 
            />
            <Input
                name="weight"
                defaultValue={props.weight}
                placeholder="Weight"
                // onChange={updateValues} 
            />
        </div>
    </div>
    <div className={style.flex}>
        <Input
            name="eyeColor"
            defaultValue={props.eyeColor}
            placeholder="Eye Color"
            // onChange={updateValues} 
        />
        <Input
            name="interestedIn"
            defaultValue={props.interestedIn}
            placeholder="Interested In"
            // onChange={updateValues} 
        />
    </div>

        <button className={style.updateBtn}>
            <p className={style.btnText}>Update User</p>
        </button>
        <p>Cancel</p>

        </form>
        </div>    
    </div>
  )
}
