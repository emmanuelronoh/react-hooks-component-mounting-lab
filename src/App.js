// App.js
import React, { Component } from 'react';
import TimerGrid from './TimerGrid'; // Ensure this path is correct

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerIDs: [] // Initialize as an empty array
    };
  }

  componentDidMount() {
    this.addTimer();
  }

  addTimer() {
    this.setState({
      timerIDs: [1] // Example timer ID
    });
  }

  render() {
    return (
      <div>
        <TimerGrid /> {/* Ensure TimerGrid is correctly rendered */}
      </div>
    );
  }
}

export default App;
