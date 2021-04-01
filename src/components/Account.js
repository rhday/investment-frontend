import React from 'react';
import TransactionsContainer from '../containers/TransactionsContainer';
import {Redirect} from 'react-router-dom';

const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1]

    return(
        <div>
            <h2>
                {account ? account.name : null} - {account ? account.balance : null}
            </h2>
            <TransactionsContainer />
        </div>
    );
};

export default Account
