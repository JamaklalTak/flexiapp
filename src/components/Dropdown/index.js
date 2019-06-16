import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        const {id, className, name, optionsArray, onChange, value } = this.props;
        return (
            <select name={name} id={id} className={className} value={value} onChange={onChange}>
                {optionsArray.map((data, index)=>{
                    return <option key={index} id={id+'_'+index}value={data}>{data}</option>
                })}
            </select>
        );
    }
}

export default Dropdown;