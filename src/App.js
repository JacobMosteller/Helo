import React, { Component } from 'react'
import axios from 'axios';
import {HashRouter} from 'react-router-dom';

import Routes from './routes';
import { Hash } from 'crypto';



class App extends Component {
constructor(props){
  super(props)
  
}
  componentDidMount(){
    axios.get('/api/ping')
    .then((res)=>{
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Routes/>
        </HashRouter>
    </div>
    )
  }
}


export default App;