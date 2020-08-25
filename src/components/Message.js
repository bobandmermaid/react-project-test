import React from 'react';
import './Message.css';

class Message extends React.Component {
  constructor() {
    super();

    this.state = {
      isLiked: false,
      counter: 0
    }
  }

  componentDidMount() {
    console.log('Я собрался!')
  }

  componentWillUnmount() {
    console.log('Я раобрался )=')
  }

  handleClick = () => {
    const { isLiked, counter } = this.state;
    this.setState({ isLiked: !isLiked, counter: counter + 1 })
  }

  render() {
    const {logo, name, title, text} = this.props;
    const { isLiked, counter } = this.state;
    const date = new Date();
    const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const btnClassName = `message-header-like-icon ${ isLiked ? 'message-header-like-icon_liked' : ''}`;

    return (
      <div className="message">
        <div className="message-header">
          <img src={logo} alt="" className="message-header-image"/>
          <div className="message-header-text_block">
            <p className="message-header-title">{name}</p>
            <span className="message-header-date">{displayDate}</span>
          </div>
          <div className="message-header-like-container">
            <button className={btnClassName}
            onClick={this.handleClick}/>
            <span className="message-header-like-counter">{counter}</span>
          </div>
        </div>
        <div className="message-body">
          <h2 className="message-body-title">
            {title}
          </h2>
          <p className="message-body-content">
            {text}
          </p>
        </div>
      </div>
    );
  }
}

export default Message;
