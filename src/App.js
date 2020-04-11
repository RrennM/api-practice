import React, {Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      trivia: ''
    }
  }

  componentDidMount() {
    fetch('http://numbersapi.com/random/trivia?json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ number: data.number })
      this.setState({ trivia: data.text })
    })
  }

  render() {
    const { number, trivia } = this.state;
    return number === '' ?
    (
      <div>
        <h1 className='tc f1 b blue'>Number Trivia!</h1>
        <p className='tc f2 blue'>Loading....</p>
      </div> 

    ) : (

      <div>
        <h1 className='tc f1 b blue'>Number Trivia!</h1>
        <p className='tc f2 blue'>{number}</p>
        <p className='tc f4 blue'>{trivia}</p>
      </div>
    )
  }
}

export default App;
