import React from 'react';


class AccountInput extends React.Component {

    state = {
        name: '',
        balance: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Investment Account Name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>Investment Account Balance: </label>
                    <input type="text" placeholder="Balance" value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
                    <input type="submit" />
                </form>
            </div>
        );
    };

};

export default AccountInput;