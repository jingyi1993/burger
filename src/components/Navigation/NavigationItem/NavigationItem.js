import React from 'react';
import Navigation from './Navigation/Navigation';
import classes from './NavigationItem.css'

const navigationItem =()=>(
    <ul className={classes.NavigationItem}>
        <Navigation link="/" exact>Burger Builder</Navigation>
        <Navigation link="/Orders">Orders</Navigation>
    </ul>
);
export  default navigationItem;