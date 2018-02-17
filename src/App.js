import React, { Component } from 'react';
import Recognition from './Components/Recognition'
import Voice from './Components/Voice'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transcript: "example"
    }
    this.returnTranscript = this.returnTranscript.bind(this);
  }

  returnTranscript(transcript) {
    this.setState({transcript: transcript})
  }

  render() {
    return(
      <div>
        <Recognition returnTranscript={this.returnTranscript}/>
        <Voice transcript={this.state.transcript}/>
      </div>
    );
  }
}

export default App;
