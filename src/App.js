import React, { Component } from 'react';

import Flexi from './Flexi';
import flexiConfig from './Assets/mock.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state=({
      errorMessage: false,
      dataArray: []
    });
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
  }
  onFlexiSubmit = (valueArray) => {
    if(valueArray.length < flexiConfig.Item.length){
      this.setState({
        errorMessage: true
      });
    } else{
      this.setState({
        errorMessage: false,
        dataArray: valueArray
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.errorMessage ?
            <div style={{ color: 'red' }}>There is some required field which are empty. Please fill them.</div>
            :
            ''
          }
          <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />
          <ul>{
            this.state.dataArray.map((data, index)=>{
                return<li key={index} style={{listStyle: 'none'}}>{data.key} : {data.value}</li>
            })
          }
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
