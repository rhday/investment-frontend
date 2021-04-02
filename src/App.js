import './styling/App.css';
import React from 'react';
import AccountsContainer from './containers/AccountsContainer';

class App extends React.Component {


  render(){
    return(
      <div className="Investment App">
        <AccountsContainer />
      </div>
    )
  }
}

//way to access values/props in our store(so we the developer can see what is in our store)
///const mapStateToProps = (state) => {
  ///return{
///
  ///}
///}

export default App;
