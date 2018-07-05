import React,{Component} from 'react';
import Button from '../../../UI/Button/Button';
import Classes from './contactData.css';
import axios from '../../../../axios-order';
import Spinner from '../../../../components/UI/spinner/spinner';
import Input from '../../../../components/UI/Input/Input';

class ContactData extends Component{

    state={
       orderForm:{
           name:{
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'your name'
               },
               value:''
           },
           street:{
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'Street'
               },
               value:''
           },
           Zipcode:{
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'ZipCode'
               },
               value:''
           },
           country:{
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'country'
               },
               value:''
           },
           email: {
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'your name'
               },
               value:''
               },
           deliveryMethod: {
               elementType:'select',
               elementConfig:{
                   options:[{value:'fastest',displayvalue:'fastest'},
                            {value:'cheapest',displayvalue:'cheapest'}],
                   placeholder:'your name'
               },
               value:''
           }
       },
        loading:false
    };
    orderHandler=(event)=>{
        event.preventDefault();
        // console.log(this.props.ingredients);
        const formData={};
        for(let elementID in this.state.orderForm){
            formData[elementID]=this.state.orderForm[elementID].value
        }
        
            this.setState({loading:true});
            const state={
                ingredients:this.props.ingredients,
                totalPrice: this.props.price,
                orderData:formData

            };


            axios.post('https://react-my-burger-5ecf2.firebaseio.com/order.json',state)
                .then(response => {
                    this.setState({loading:false});
                    this.props.history.push('/');
                    return (console.log(response))
                })
                .catch(error=>{
                    return(console.log(error))
                })
    };

    inputChangedHandler=(event,inputId)=> {

        const newForm = {
            ...this.state.orderForm
        };
        const newElement= {
            ...newForm[inputId]
        };



        newElement.value=event.target.value;
        newForm[inputId]=newElement;

        this.setState({orderForm:newForm})
        console.log(this.state.orderForm)

    }

    render(){
        const listItem=[];
        const order =this.state.orderForm;
        for (let list in order){
            listItem.push({
                name:list,
                config:order[list]
                }

            )
        }
        const listItems= (<form onSubmit={this.orderHandler}>
            {listItem.map(item => {
            return (
                <Input name={item.name}
                       elementType={item.config.elementType}
                       elementConfig={item.config.elementConfig}
                       value={item.config.value}
                       key={item.name}
                       changed={(event) => this.inputChangedHandler(event,item.name)}/>
           )
        })}

        <Button btnType="Success"
                clicked={this.orderHandler}>Order</Button>
            </form>);

        // if(this.state.loading){
        //     listItems = <Spinner/>;
        // }




        return(
            <div className={Classes.ContactData}>
                <h4>Enter Your contact data</h4>
                {listItems}


            </div>
        )
}

}
export default ContactData;