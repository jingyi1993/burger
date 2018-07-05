import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import DrawerToggle from '../sideDraw/drawerToggle/drawerToggle';

const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.clicked}/>
        {/*<div onClick={props.clicked}>Menu</div>*/}
            <div className={classes.Logo}>
        <Logo/>
            </div>
        <nav>
        <NavigationItem/>
        </nav>
    </header>

);
export  default toolbar;