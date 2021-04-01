import React from 'react';

const Transactions = (props) => {
    
    return(
        <div>
          {props.transactions && props.transactions.map(transaction => 
            <li key={transaction.id}>{transaction.kind} - {transaction.amount} - {transaction.asset}</li>
            )}
        </div>
    )
}

export default Transactions;
