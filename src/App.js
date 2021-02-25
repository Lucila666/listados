import React, {component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      users: ['Valen'],
      isFetch: true,
    }
  }
  
  componentDidMount(){}

  render(){
    if (this.state.isFetch){
      return 'Loading...'
    }

    const name = this.state
  }
}

export default App;
