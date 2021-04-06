import React from 'react';
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'


const Transactions = (props) => {

    const handleDelete = (transaction) => {
        //debugger
        props.deleteTransaction(transaction.id, props.account.id)
    }
    
    return(
        <div>
          {props.transactions && props.transactions.map(transaction => 
            <li key={transaction.id}>{transaction.kind} - {transaction.amount} - {transaction.asset}  <Button variant="primary" onClick={() => handleDelete(transaction)}>Delete</Button></li>
            )}
        </div>
    )
}

export default connect(null, {deleteTransaction}) (Transactions);
