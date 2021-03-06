import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accounts from '../components/Accounts';
import Account from '../components/Account';
import AccountInput from '../components/AccountInput';
import Increment from '../components/Increment'
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions/fetchAccounts';

class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }

    render(){
        return(
            <div> 
                <Route path="/account/new" component={AccountInput} /><br/><br/>
                <Route path="/accounts/:id" render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
                <Route exact path="/accounts" render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>} />
                <Increment />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);