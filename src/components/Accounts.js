import React from 'react';
import {Link } from 'react-router-dom';
//import Account from './Account';


const Accounts = (props) => {
    console.log(props)
    return(
        <div>
            {props.accounts.map(account => 
            <div key={account.id}>
                <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </div>)}
        </div>
    );

};

export default Accounts;

//{props.accounts.map(account => 
//    <div key={account.id}><Account account={account}/></div>)}