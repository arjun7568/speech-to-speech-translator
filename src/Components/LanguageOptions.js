import React, { Component } from 'react';

class LanguageOptions extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let lang = event.target.value;

    if (lang === "English") {
      this.props.setLang("en-US");
    }
    else if (lang === "French") {
      this.props.setLang("fr-FR");
    }
    else if (lang === "Spanish") {
      this.props.setLang("es-ES");
    }
    else if (lang === "Japanese") {
      this.props.setLang("ja-JP");
    }
    else if (lang === "Portugese") {
      this.props.setLang("pt-BR");
    }
    else if (lang === "Italian") {
      this.props.setLang("it-IT");
    }
    else if (lang === "German") {
      this.props.setLang("de-DE");
    }
  }

  render() {
    return(
      <form onChange={this.handleChange}>
        <select>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>Japanese</option>
          <option>Portugese</option>
          <option>Italian</option>
          <option>German</option>
        </select>
      </form>
    );
  }
}

export default LanguageOptions;
