import React from 'react';
import {connect} from 'react-redux';
import addTransaction from '../actions/addTransaction'

import 'bootstrap/dist/css/bootstrap.min.css'

class TransactionInput extends React.Component {

    state = {
        kind: 'deposit',
        amount: '',
        asset: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransaction(this.state, this.props.account.id)
        this.setState({
            kind: 'deposit',
            amount: ''
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Transaction Type:</label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>deposit</option>
                        <option>withdraw</option>
                    </select>
                    <label>Transaction Amount:</label>
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                    <label>Asset:</label>
                    <input type="text" name="asset" value={this.state.asset} onChange={this.handleChange}/>
                    <input type="submit" />
                </form> 
            </div>
        )
    }

}

export default connect(null, {addTransaction})(TransactionInput);