import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckOut.css';


const CheckOut =(props)=>{
        return(
        <div className={classes.Checkout}>
            <h1>we hope it taste well</h1>
            <div style={{width:'100%',height:'300px',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger"
                    clicked={props.checkoutCanceled}>cancel</Button>
            <Button btnType="Success"
                    clicked={props.checkoutContinued}>continue</Button>
        </div>

    )
};
export default CheckOut;