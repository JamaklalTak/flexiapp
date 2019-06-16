import React, { Component } from 'react';


class Button extends Component {
    render() {
        const { id, className, type, name, value, onChange, onClick } = this.props;
        return (
            <button
                value={value}
                name={name}
                className={className}
                id={id}
                type={type}
                onClick={onClick}
                onChange={onChange}>
                {value}
            </button>
        );
    }
}

export default Button;