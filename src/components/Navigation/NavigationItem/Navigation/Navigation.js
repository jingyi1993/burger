import React from 'react';
import classes from './Navigation.css';
import {NavLink} from 'react-router-dom';
const navigation =(props)=>(
    <li className={classes.Navigation}>
        <NavLink to={props.link}
        className={classes.active} exact={props.exact}>{props.children}</NavLink>
    </li>

);
export default navigation;