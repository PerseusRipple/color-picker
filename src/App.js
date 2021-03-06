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
  /*
   removeColorFromList = () => {
    this.setState({
removeChild(this.previousElementSibling);
    removeChild(this);
    })
    
    };
} */

  updateHue = event => {
    console.log(event.target.value);
    this.setState({
      hue: event.target.value
    });

    console.log("THISSSSS" + this.state.colors);
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
        <header>
          <h1>Random Rainbow</h1>{" "}
        </header>
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
              min="0"
              max="100"
              onChange={this.updateSaturation}
            />
          </section>

          <section className="lightness">
            <p>Lightness</p>

            <input
              type="range"
              className="lightness"
              name="lightness"
              min="0"
              max="100"
              onChange={this.updateLightness}
            />
          </section>
        </section>
        <section className="button_box">
          <button className="remember" onClick={this.addColorToList}>
            Remember Me!
          </button>

          <button className="remove" onClick={this.removeColorFromList}>
            Remove Me!
          </button>
        </section>
        <h2 className="favorites">
          <em>Keepers:</em>
        </h2>
        <section className="list_container">
          <h1>
            {this.state.colors.map(color => {
              return (
                <p
                  className="patch"
                  color
                  style={{
                    backgroundColor: `hsl(${this.state.hue},${
                      this.state.saturation
                    }%,${this.state.lightness}%)`
                  }}
                >
                  {color}
                </p>
              );
            })}
          </h1>
        </section>
      </>
    );
  }
}

export default App;
