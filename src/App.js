import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "black",
      bold: false,
      italic: false,
      underline: false
    };
    this.selectColor = this.selectColor.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
  }

  selectColor(selColor) {
    this.setState({ color: selColor });
  }

  selectStyle(style) {
    // switch (style) {
    //   case "bold":
    //     this.setState({ bold: !this.state.bold });
    //     break;
    //   case "italic":
    //     this.setState({ italic: !this.state.italic });
    //     break;
    //   case "underline":
    //     this.setState({ underline: !this.state.underline });
    //     break;
    //   default: {
    //     /*pass*/
    //   }
    // }

    this.setState({ [style]: !this.state[style] });
  }
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          className={`btn ${this.state[style] && "btn-primary"}`}
          style={styles[style]}
          key={style}
          onClick={() => this.selectStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            fontStyle: this.state.italic ? "italic" : "",
            fontWeight: this.state.bold ? "bold" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
