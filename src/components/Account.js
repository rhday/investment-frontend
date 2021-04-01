import React from 'react';
import TransactionsContainer from '../containers/TransactionsContainer';
import {Redirect} from 'react-router-dom';

const Account = (props) => {

    //let account = props.accounts[props.match.params.id - 1]

    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

    return(
        <div>
            <h2>
                {account ? `${account.name} - ${account.balance}` : null }
            </h2>
            <TransactionsContainer account={account}/>
        </div>
    );
};

export default Account
