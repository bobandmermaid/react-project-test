import {Link} from "react-router-dom";
import React from "react";
import './Navigation.css'

class Navigation extends React.Component {

  render() {
    return (
    <nav className="navigation">
      <a className="navigation-brand" href="/">drain</a>
      <ul className="navigation-list">
        <li>
          <Link to="/" className="navigation-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="hello" className="navigation-link">
            Hello
          </Link>
        </li>
        <li>
          <Link to="signin" className="navigation-link">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  )
  }
}

export default Navigation
