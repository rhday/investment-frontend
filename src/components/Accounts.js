import React from 'react';
import Account from './Account'

const Accounts = (props) => {
    console.log(props)
    return(
        <div>
            {props.accounts.map(account => 
            <div key={account.id}><Account account={account}/></div>)}
        </div>
    );

};

export default Accounts;

//{props.accounts.map(account => 
//    <div key={account.id}><Account account={account}/></div>)}