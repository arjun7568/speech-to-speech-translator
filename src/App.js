import React, { Component } from 'react';
import LanguageOptions from './Components/LanguageOptions';
import Recognition from './Components/Recognition';
import Voice from './Components/Voice';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transcript: "example",
      transcript2: "example2",
      translation1: "translation1",
      translation2: "translation2",
      lang1: "en-US",
      lang2: "en-US"
    }
    this.returnTranscript = this.returnTranscript.bind(this);
    this.returnTranscript2 = this.returnTranscript2.bind(this);

    this.setUser1Lang = this.setUser1Lang.bind(this);
    this.setUser2Lang = this.setUser2Lang.bind(this);
  }

  returnTranscript(transcript) {
    this.setState({transcript: transcript});
  }

  returnTranscript2(transcript2) {
    this.setState({transcript2: transcript2});
  }

  setUser1Lang(lang1) {
    this.setState({lang1: lang1});
  }

  setUser2Lang(lang2) {
    this.setState({lang2: lang2});
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
