import React from 'react';
import { Route } from 'react-router-dom';
import Accounts from '../components/Accounts';
import AccountInput from '../components/AccountInput';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions/fetchAccounts';

class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }

    render(){
        return(
            <div>
                <Route path="/accounts/new" component={AccountInput} /><br/><br/>
                <Accounts accounts={this.props.accounts}/>
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