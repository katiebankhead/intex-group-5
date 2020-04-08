import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {};
    this.state = {
      campaigns: {},
    };
  }

<<<<<<< HEAD
  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }
    constructor(props) {
        super(props)
        this.actions = {
        }
        this.state = {
            campaigns: [],
        }
    }
>>>>>>> bd1ff913e843e861569bf466b1464c76bc94e707

  async componentDidMount() {
    const resp = await axios.get("http://localhost:8000/api/campaign/");

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/api/campaign/')
        console.log(resp.data)

        this.setState({
            campaigns: resp.data,
        })
    }

}
>>>>>>> bd1ff913e843e861569bf466b1464c76bc94e707
