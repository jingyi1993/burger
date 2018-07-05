import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import {Route,NavLink} from 'react-router-dom';
import CheckOutSummary from "../../../container/checkOut/checkOutSummary";

class orderSummary extends Component{

    componentDidUpdate(){
        console.log(this.props);
    }

    render(){
        const ingredientSummary =Object.keys(this.props.ingredients)
            .map(igKey=>{
                return <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>
            });
        return (<Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>your total price is:{this.props.price.toFixed(2)}</strong></p>
            <p>continue to check out?</p>

            <Button btnType="Danger" clicked={this.props.clickButtom1}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.clickButtom2}>Continue</Button>


        </Aux>)
    }
};


export default orderSummary;