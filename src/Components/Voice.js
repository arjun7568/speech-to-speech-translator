import React, { Component } from 'react'
import VoicePlayer from '../VoicePlayer'

class VoicePlayerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: false,
      text: ""
    }
    this.onEnd = this.onEnd.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({text: props.transcript})
  }

  handleTextChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  onEnd = () => {
    this.setState({ play: false })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ play: true })}>Play</button>
        <input value={this.state.text} onChange={this.handleTextChange}/>

        {this.state.play && (
          <VoicePlayer
            play
            lang={this.props.lang}
            text={this.state.text}
            onEnd={this.onEnd}
          />
        )}
      </div>
    )
  }
}

export default VoicePlayerDemo
