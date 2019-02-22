import React, { Component } from "react";

class App extends Component {
  state = {
    hue: 50,
    saturation: 80,
    lightness: 20,
    colors: []
  };

  addColorToList = () => {
    this.setState({
      colors: this.state.colors.concat(
        `hsl(${this.state.hue},${this.state.saturation}%,${
          this.state.lightness
        }%)`
      )
    });
  };

  updateHue = event => {
    console.log(event.target.value);
    this.setState({
      hue: event.target.value
    });
  };

  updateSaturation = event => {
    console.log(event.target.value);
    this.setState({
      saturation: event.target.value
    });
  };

  updateLightness = event => {
    console.log(event.target.value);
    this.setState({
      lightness: event.target.value
    });
  };

  render() {
    return (
      <>
        <h1>Random Rainbow</h1>
        <section
          className="color"
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
              this.state.lightness
            }%)`
          }}
        >
          Color
        </section>

        <section className="slider">
          <section className="hue">
            <p>Hue</p>
            <input
              type="range"
              className="hue"
              name="hue"
              min="0"
              max="240"
              onChange={this.updateHue}
            />
          </section>

          <section className="saturation">
            <p>Saturation</p>

            <input
              type="range"
              className="saturation"
              name="saturation"
              onChange={this.updateSaturation}
            />
          </section>

          <section className="lightness">
            <p>Lightness</p>

            <input
              type="range"
              className="lightness"
              name="lightness"
              onChange={this.updateLightness}
            />
          </section>
        </section>
        <section className="button_box">
          <button className="button" onClick={this.addColorToList}>
            Remember Me!
          </button>
        </section>
        <section className="list_container">
          Favorite Colors
          <ul>
            {this.state.colors.map(color => {
              return <li>{color}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default App;
/*
//<ul>
 {this.state.colors.map(color => {
  return <li>{color}</li> </ul>;}
}) */
