import './App.css';
import React from 'react';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/accounts/1')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render(){
    return(
      <div className="Investment App">
        Investment App
      </div>
    )
  }
}

export default App;
