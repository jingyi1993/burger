import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDraw from '../Navigation/sideDraw/sideDraw';

class Layout extends Component{
    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler=()=>{
        let show=this.state.showSideDrawer;
        this.setState({showSideDrawer:!show});

    };
    sideDrawerToggleHandler=()=>{
        this.setState({showSideDrawer:!this.state.showSideDrawer})};


    render(){
        return(<Aux>
        <ToolBar clicked={this.sideDrawerToggleHandler}/>
        <SideDraw  open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        {/*<div>Toolbar,SideDrawer,Backdrop</div>*/}
        <div className={classes.Content}>
            {this.props.children}
        </div>
       </Aux>)}
};

export default Layout;