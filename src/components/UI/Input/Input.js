import React from 'react';
import Classes from './Input.css';

const input =(props)=> {

    let inputElement = null;


    switch (props.elementType) {
        case('input'):
            inputElement = <input type={props.elementType}
                                  {...props.name}
                                  {...props.elementConfig.type}
                                  placeholder={props.elementConfig.placeholder}
                                  className={Classes.InputElement}
                                  onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea {...props.elementConfig} className={Classes.InputElement}/>
            break;

        case('select'):
            inputElement = <select {...props.elementType}
                                   className={Classes.InputElement}
                                    onChange={props.changed}>
                {[...props.elementConfig.options].map(
                    option=>{
                        return (<option value={option.value}
                                        key={option.value}>
                                 {option.displayvalue}

                               </option>)
                    }
                )}
            </select>
            break;

        default:
            inputElement = <input {...props.elementConfig} className={Classes.InputElement}/>;


    }
    return (
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.name}</label>
            {inputElement}
        </div>


    );
}

export default input;