import React,{Component} from 'react';
import  Model from '../../components/UI/model/model';
import Aux from '../../hoc/Aux';

const withErrorHandler =(WrappedComponent,axios)=> {
    return class extends Component{
        state={
            error:null
        };

        componentWillMount(){
            this.reqInterceptor=axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptor=axios.interceptors.response.use(res=>res,error => {
                this.setState({error:error})
            });

        }
        componentWillUnmount(){
            console.log('will unmount',this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler=()=>{
            this.setState({error:null})
        }

        render(){

                    return (
                        <Aux>
                            <Model show={this.state.error}
                            click={this.errorConfirmHandler}>
                                {this.state.error?this.state.error.message:null}
                            </Model>
                            <WrappedComponent {...this.props}/>
                        </Aux>
                    )

                };
        };


};
export default withErrorHandler;