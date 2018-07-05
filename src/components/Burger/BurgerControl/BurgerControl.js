import React from 'react';
import BuildControls from './BuildControls/BuildControls';
import classes from './BurgerControl.css';

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'}
];
const BurgerControl =(props)=>(
    <div className={classes.BuildControl}>
        <p>Current price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=> <BuildControls
            key={ctrl.label}
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        )}
        <button className={classes.OrderButton} disabled={!props.purchaseable}
        onClick={props.clickButtom}>ORDER NOW</button>
    </div>


);
export default BurgerControl;