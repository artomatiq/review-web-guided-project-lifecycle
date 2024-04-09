import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
    constructor() {
        super();

        this.state = {dogs: []}
    }

    componentDidMount() {
        axios.get('dog.ceo/api/breeds/image/random')
            .then (res => {
                console.log(res.data)
                this.setState({dogs: res.data})
            })
            .catch(err => {
                alert('Error fetching dogs', err.message)
            })
    }

    render() {
        return (
            <div className='App container' >
                hello
            </div>
        );
    }
}