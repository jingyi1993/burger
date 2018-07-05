import React,{Component} from 'react';
import classes from './model.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

class Model extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show||nextProps.children!==this.props.children;
    }
    componentWillUpdate(){
        console.log('Model will update')
    }
    render(){
        return (<Aux>
                <BackDrop show={this.props.show} clicked={this.props.modelClosed}
                          clicked={this.props.click}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                     onClick={this.props.click}>
                    {this.props.children}

                </div>
            </Aux>
        )
    }

};
export default Model;