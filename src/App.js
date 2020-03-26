import React from "react";
import "./styles.css";
import jokerlogo from "./joker.jpg";
import Advanced from "./Advanced.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      joke: null,
      tab: false,
      isFetchingJoke: false
    };

    this.onTelljoke = this.onTelljoke.bind(this);
    this.AdvanceTab = this.AdvanceTab.bind(this);
  }

  componentDidMount() {
    this.fecthjoke();
  }

  fecthjoke() {
    this.setState({ isFecthingJoke: true });
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke, isFecthingJoke: false
         });
      });
  }

  onTelljoke() {
    this.fecthjoke();
  }


  AdvanceTab() {
    if(this.state.tab){
      this.setState({ tab: false });
    }else{
      this.setState({ tab: true });
    }
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.tab ? "desactive-tab":"active-tab"}>
        <nav>
          <ul>
            <li>Click here on Tell me a joke and you will see a random joke if you need search advanced click here:&nbsp;</li>
            <li><button onClick={this.AdvanceTab}>Advanced search</button></li>
          </ul>
        </nav>
          <div className="media">
            <p>{this.isFecthingJoke ? "Loanding joke..." : this.state.joke}</p>
            <div className="joker-media">
              <img src={jokerlogo} />
              <button onClick={this.onTelljoke} disabled={this.state.isFecthingJoke}>Tell me a joke</button>
            </div>
          </div>
          </div>
          <div className={this.state.tab ? "tabTwo active-tab":"desactive-tab"}>
          <Advanced />
          <hr/>
            <button onClick={this.AdvanceTab}><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Close advanced</button>
          </div>
          <p className="devword">Development by <a href="https://github.com/Phermidex/serachJokes">Phermidex</a></p>
      </div>
    );
  }
}

export default App;
