import React from 'react';
import { connect } from 'react-redux';
import { addAccount }from '../actions/addAccount';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

class AccountInput extends React.Component {

    state = {
        name: '',
        balance: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state)
        this.setState({
            name: '',
            balance: ''
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Investment Account Name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Investment Account Balance: </label>
                    <input type="text" placeholder="Balance" value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
                    <Button variant="outline-success" type="submit">Submit</Button>
                    
                </form>
            </div>
        );
    };

};

export default connect(null, {addAccount})(AccountInput);