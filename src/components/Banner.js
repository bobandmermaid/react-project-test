import React from "react";
import './Banner.css'

class Banner extends React.Component {

  render() {
    return (
      <div className="banner">
        <div className="banner-container">
          <h1 className="banner-title">drain</h1>
          <p className="banner-subtitle">A place to share your knowledge.</p>
        </div>
      </div>
    )
  }
}

export default Banner
