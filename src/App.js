import React from 'react';
import  {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import './App.css';

import Message from './components/Message';
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const API = 'https://randomuser.me/api?results=20';

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    userData: []
  };
}

componentDidMount() {
  axios.get(API, config)
    .then((res) => {
      this.setState({ userData: res.data.results })
    });
}

  render() {
  const { userData } = this.state;
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <Banner/>
              {userData.map(({ name, picture, location, id}, index) => {
                return (
                  <Message
                    name={`${name.first} ${name.last}`}
                    logo={picture.thumbnail}
                    title={location.country}
                    text={location.city}
                    key={id.value}
                  />
                )
              })}
            </div>
          </Route>
          <Route path="/hello">
            Hello
          </Route>
          <Route path="/signin">
            Регистратура
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
