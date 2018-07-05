import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './sideDraw.css';
import  BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const sideDraw=(props)=>{
    let whetherBackDrop=[classes.SideDraw,classes.Close];
    if(props.open){
        whetherBackDrop=[classes.SideDraw,classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
        <div className={whetherBackDrop.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItem/>
            </nav>

        </div>
        </Aux>
    )


    };


export  default  sideDraw;