import React, { Component } from 'react';
import LanguageOptions from './Components/LanguageOptions';
import Recognition from './Components/Recognition';
import Voice from './Components/Voice';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transcript: "",
      transcript2: "",
      translation1: "",
      translation2: "",
      lang1: "en-US",
      lang2: "en-US"
    }
    this.returnTranscript = this.returnTranscript.bind(this);
    this.returnTranscript2 = this.returnTranscript2.bind(this);

    this.setUser1Lang = this.setUser1Lang.bind(this);
    this.setUser2Lang = this.setUser2Lang.bind(this);

    this.callAPI1 = this.callAPI1.bind(this);
    this.callAPI2 = this.callAPI2.bind(this);
  }

  returnTranscript(transcript) {
    this.setState({transcript: transcript}, () => this.callAPI1());
  }

  returnTranscript2(transcript2) {
    this.setState({transcript2: transcript2}, () => this.callAPI2());
  }

  setUser1Lang(lang1) {
    this.setState({lang1: lang1});
  }

  setUser2Lang(lang2) {
    this.setState({lang2: lang2});
  }

  callAPI1() {
    let url = 'http://localhost:5000/' + this.state.lang1 + "/" + this.state.lang2 + "/" + this.state.transcript;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          translation1: response.text
        })
      })
    console.log("called");
  }

  callAPI2() {
    let url = 'http://localhost:5000/' + this.state.lang2 + "/" + this.state.lang1 + "/" + this.state.transcript2;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          translation2: response.text
        })
      })
  }

  render() {
    return(
      <div className="container">
        <div className="user1">
          <h2>User One</h2>
          <LanguageOptions
            setLang={this.setUser1Lang}/>
          <Recognition
            returnTranscript={this.returnTranscript}
            lang={this.state.lang1}/>
          <h3>Transcript:</h3>
          <input value={this.state.transcript}/>
          <h3>Translation</h3>
          <Voice
            transcript={this.state.translation1}
            lang={this.state.lang2}/>
        </div>
        <div className="user2">
          <h2>User Two</h2>
          <LanguageOptions
            setLang={this.setUser2Lang}/>
          <Recognition
            returnTranscript={this.returnTranscript2}
            lang={this.state.lang2}/>
          <h3>Transcript:</h3>
          <input value={this.state.transcript2}/>
          <h3 >Translation: </h3>
          <Voice
            transcript={this.state.translation2}
            lang={this.state.lang1}/>
        </div>
      </div>
    );
  }
}

export default App;
