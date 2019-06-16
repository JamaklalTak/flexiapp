import React, { Component } from 'react';

import Input from './../components/Input';
import Dropdown from './../components/Dropdown';
import Button from './../components/Button';

class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            inputKey: '',
            inputValue: '',
            selectKey: '',
            selectValue: ''
        });
        this.sendUserData = this.sendUserData.bind(this);
    }

    sendUserData = (event) => {
        event.preventDefault();
        let valueArray = [];
        for (let i = 0; i < this.props.config.Item.length; i++) {
            const val = document.getElementById(this.props.config.Item[i].name);
            if (val && val.value && val !== null && val !== '') {
                valueArray.push({ "key": this.props.config.Item[i].label, "value": val.value });
            }
        }
        return this.props.onSubmit(valueArray);
    }
    render() {
        const { config } = this.props;
        let _renderFlexi = config.Item.map((data, index) => {
            let element = '';
            if (data.type === "TextField") {
                element = <div key={index} className="row">
                    <div className="col-md-4">
                        <label>{data.label}</label>
                    </div>
                    <div className="col-md-4">
                        <Input
                        type="text"
                        id={data.name}
                        name={data.name}
                        className="element-css"
                    />
                    </div>
                </div>;
            }
            if (data.type === "DropDown") {
                element = <div key={index} className="row">
                    <div className="col-md-4">
                        <label>{data.label}</label>
                    </div>
                    <div className="col-md-4">
                    <Dropdown
                        id={data.name}
                        name={data.name}
                        optionsArray={data.values}
                        className="element-css"
                    />
                    </div>
                </div>;
            }
            return element;
        });
        return (
            <div className="flexi-box">
                <form onSubmit={this.sendUserData}>
                    {_renderFlexi}
                    <Button type='submit' value='SUBMIT' />
                </form>
            </div>
        );
    }
}

export default Flexi;