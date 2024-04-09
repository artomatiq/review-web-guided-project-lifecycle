import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
    constructor() {
        super();

        this.state = {dogs: []}
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random/10')
            .then (res => {
                console.log(res.data.message)
                this.setState({dogs: res.data.message})
            })
            .catch(err => {
                console.log('Error fetching dogs', err.message)
            })
    }

    

    render() {
        return (
            <div>
                <h1>Doggy Therapy</h1>
                <div className='App' >
                    {this.state.dogs.map((url, idx) => {
                        console.log(url)
                        return (
                            <div className='dog-container' key={idx}>
                                <img src={url} alt='doggo' />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}