import './styling/App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from './actions/fetchAccounts';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Investment'}})
  }

  render(){
    return(
      <div className="Investment App">
        Investment App
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

export default connect(null, {fetchAccounts})(App);
