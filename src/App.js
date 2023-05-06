import React, { Component } from "react";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.intervalId = null;
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      const input = event.target.value;
      const time = Math.floor(Number(input));
      if (!isNaN(time) && time >= 0) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
        this.setState({ time });
        this.intervalId = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time - 1
          }), () => {
            if (this.state.time === 0) {
              clearInterval(this.intervalId);
            }
          });
        }, 1000);
      } else {
        this.setState({ time: 0 });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <label htmlFor="timer">Set Timer</label>
        <br />
        <input
          type="text"
          placeholder="Enter time in seconds"
          onKeyDown={(event) => this.handleKeyDown(event)}
        />
        <div id="current-time">{this.state.time}</div>
      </div>
    );
  }
}

export default App;
