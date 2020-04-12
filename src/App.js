import React, {Component } from 'react';
import RefreshButton from './RefreshButton'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      advice: ''
    }
  }

  componentDidMount() {
    fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(data => {
      console.log(data.slip.advice);
      this.setState({ advice: data.slip.advice })
    })
  }

  onButtonClick= () => {
    this.setState({ advice: 'Loading...' })

    fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ advice: data.slip.advice })
    })
  }

  onSearchChange = (event) => {
      this.setState({ searchfield:event.target.value });
  }

  render() {
    const { advice } = this.state;
    return advice === '' ?
    (
      <div>
        <h1 className='tc f1 b blue'>Random Advice!</h1>
        <div className="infoBox">
          <p className='tc f2 blue'>Loading....</p>
        </div>
        <RefreshButton buttonClick={this.onButtonClick} className='tc'/>
        <p className="tc f6 blue">Warning: This may take a few moments to complete.</p>
      </div> 

    ) : (

      <div>
        <h1 className='tc f1 b blue'>Random Advice!</h1>
        <div className="infoBox">
          <p className='tc f2 blue'>{advice}</p>
        </div>
        <RefreshButton buttonClick={this.onButtonClick} className='tc'/>
        <p className="tc f6 blue">Warning: This may take a few moments to complete.</p>
      </div>
    )
  }
}

export default App;
