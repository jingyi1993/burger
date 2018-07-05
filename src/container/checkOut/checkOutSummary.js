import React,{Component} from 'react';
import CheckOut from '../../components/Order/CheckOut/CheckOut';
import {Route} from 'react-router-dom';
import ContactData from '../../components/Order/CheckOut/contactData/contactData';


class CheckOutSummary extends  Component{

    state={
        ingredients:null,
        price:0
    };

    componentWillMount(){
        const query= new URLSearchParams(this.props.location.search);

         const ingredients={};
        for(let param of query.entries()){
            console.log(param);//['salad','1']
            if(param[0]==='price'){
                this.setState({price:param[1]});
            }
                else{
                    ingredients[param[0]]=param[1];
                }


        }
        this.setState({ingredients:ingredients});

    };

    checkoutCanceledHandler=()=>{
        this.props.history.push({pathname:'/'});
    };

    checkoutContinueHandler=()=> {
        this.props.history.replace({
            pathname: '/checkout/contact-data'
        })
    };



    render(){







        return(
             <div>


                <CheckOut
                ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceledHandler}
                checkoutContinued={this.checkoutContinueHandler}/>
                 <Route path={this.props.match.url+ '/contact-data'}
                        render={(props)=>(<ContactData
                              ingredients={this.state.ingredients}
                               price={this.state.price}
                              {...props}/>)}/>
             </div>

        )
    }


}
export default CheckOutSummary;