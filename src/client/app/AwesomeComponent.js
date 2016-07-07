import React from 'react';

class AwesomeComponent extends React.Component {
  render() {
    return (
      <div>
        Likes : <span>{this.props.data}</span>
        <div><button onClick={this.props.onLikeClick}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;