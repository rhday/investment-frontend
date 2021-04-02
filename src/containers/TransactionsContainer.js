import React from 'react';
import TransactionInput from '../components/TransactionInput';
import Transactions from '../components/Transactions';

class TransactionsContainer extends React.Component {

    render(){
        return(
            <div>
                <TransactionInput account={this.props.account}/>
                <Transactions  transactions={this.props.account && this.props.account.transactions} account={this.props.account} />
            </div>
        )
    }
}

export default TransactionsContainer;