import React, { Component } from 'react';

class Input extends Component{
    render(){
        const { type, id, className, placeholder, onChange } = this.props;
        return(
            <input
                type={type}
                id={id}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />
        );
    }
}

export default Input;