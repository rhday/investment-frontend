import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

class Increment extends React.Component {

    state = {
        word: '',
        increment: 0
    };

    handleChange = (event) => {
        this.setState({
            word: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            word: '',
            increment: this.state.increment + this.state.word.length
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Type a word</label>
                    <input type="text" placeholder="Type Word here" value={this.state.word} onChange={this.handleChange}/>
                    {this.state.increment}
                    <Button variant="outline-success" type="submit">Submit</Button>
                </form>
            </div>
        )
    }

}

export default Increment; 
