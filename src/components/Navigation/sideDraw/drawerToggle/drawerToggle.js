import React from 'react';
import classes from './drawerToggle.css';
const drawertoggle =(props)=>(
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
export default drawertoggle;