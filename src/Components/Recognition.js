import React, { Component } from 'react'
import VoiceRecognition from '../VoiceRecognition'

class VoiceRecognitionDemo extends Component {
  state = {
    start: false,
    stop: false
  }

  onEnd = () => {
    this.setState({ start: false, stop: false })
  }

  onResult = ({ finalTranscript }) => {
    this.props.returnTranscript(finalTranscript)
    this.setState({ start: false })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ start: true })}>start</button>
        <button onClick={() => this.setState({ stop: true })}>stop</button>

        {this.state.start && (
          <VoiceRecognition
            onResult={this.onResult}
            continuous={true}
            lang={this.props.lang}
            stop={this.state.stop}
          />
        )}
      </div>
    )
  }
}

export default VoiceRecognitionDemo
