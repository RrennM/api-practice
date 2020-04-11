import React, {Component } from 'react';
import RefreshButton from './RefreshButton'
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

  onButtonClick= () => {
    this.setState({ number: 'Loading...' })
    this.setState({ trivia: '' })

    fetch('http://numbersapi.com/random/trivia?json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ number: data.number })
      this.setState({ trivia: data.text })
    })
  }

  onSearchChange = (event) => {
      this.setState({ searchfield:event.target.value });
  }

  render() {
    const { number, trivia } = this.state;
    return number === '' ?
    (
      <div>
        <h1 className='tc f1 b blue'>Number Trivia!</h1>
        <div className="infoBox">
          <p className='tc f2 blue'>Loading....</p>
        </div>
        <RefreshButton buttonClick={this.onButtonClick} className='tc'/>
        <p className="tc f6 blue">Warning: This may take a few moments to complete.</p>
      </div> 

    ) : (

      <div>
        <h1 className='tc f1 b blue'>Number Trivia!</h1>
        <div className="infoBox">
          <p className='tc f2 blue'>{number}</p>
          <p className='tc f4 blue'>{trivia}</p>
        </div>
        <RefreshButton buttonClick={this.onButtonClick} className='tc'/>
        <p className="tc f6 blue">Warning: This may take a few moments to complete.</p>
      </div>
    )
  }
}

export default App;
