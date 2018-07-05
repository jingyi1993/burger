import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl';
import Model from '../../components/UI/model/model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';


class BurgerBuilder extends Component{
    // constructor(props){
    //     super()
    // }

    // INGREDIENTS_PRICES={
    //     salad:0.5,
    //     bacon:0.1,
    //     cheese:0.2,
    //     meat:0.9
    // }

    state={
        ingredients:null,
        ingredients_price:null,
        totalPrice: 4,
        purchaseable: false,
        clickButtom: false,
        loading: false
    };

    componentDidMount(){
        console.log(this.props);
        axios.get('https://react-my-burger-5ecf2.firebaseio.com/ingredients.json')
            .then(response=>{
            this.setState({ingredients:response.data})
            console.log(response)}
            )
        axios.get('https://react-my-burger-5ecf2.firebaseio.com/price.json')
            .then(response=>{
                this.setState({ingredients_price:response.data})
                console.log(response)}
            )
    }



    clickButomHandler = () => {

        this.setState({clickButtom:true})
    };

    updatePurchaseState=(ingredients) =>{
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        console.log(sum);

        this.setState({purchaseable: sum > 0})
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount =oldCount+1;
        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition=this.state.ingredients_price[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice+priceAddition;
        this.setState({

            ingredients:updatedIngredients,
            totalPrice: newPrice

        });
        this.updatePurchaseState(updatedIngredients);



    };
    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount =oldCount-1;

        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=this.state.ingredients_price[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice-priceDeduction;
        this.setState({

            ingredients:updatedIngredients,
            totalPrice: newPrice,


        })
        this.updatePurchaseState(updatedIngredients);
    };
    purchaseCancelHandler=()=>{
        this.setState({
            clickButtom:false
        })
    };
    purchaseContinueHandler=()=>{
    //     // alert('Continue Please');

        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
            queryParams.push('price='+this.state.ingredients_price);
        }
        const queryString = queryParams.join('&');
        this.props.history.push({pathname:"/checkOut", search:'?'+ queryString
        });
    };



    render(){
        let oderSummary=null;


        // const canPurchased = this.state.totalPrice>4
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        let burger=<Spinner/>
        if(this.state.ingredients){
            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControl
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled={disabledInfo}
                            price={this.state.totalPrice}
                            purchaseable={this.state.purchaseable}
                            clickButtom={this.clickButomHandler}/>
                 </Aux>);

            oderSummary=<OrderSummary ingredients={this.state.ingredients}
                                      clickButtom1={this.purchaseCancelHandler}
                                      clickButtom2={this.purchaseContinueHandler}
                                      price={this.state.totalPrice}/>}
        if(this.state.loading){
            oderSummary=<Spinner/>}




        return(
            <Aux>
                {burger}
                <Model show={this.state.clickButtom} modelClosed={this.purchaseCancelHandler}>
                    {oderSummary}
                </Model>

            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);