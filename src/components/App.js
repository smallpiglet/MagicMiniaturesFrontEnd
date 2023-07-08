import React from "react";
import "../styles/app.css"
import Menu from "./Menu";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
      </div>
    )
  }
}

export default App;
