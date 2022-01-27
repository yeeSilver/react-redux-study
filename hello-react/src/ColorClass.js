import React, { Component } from "react";

class ColorClass extends Component {
 
  state = {
    likes: 0,
    unlikes: 0,
  }
  render() {
    const { likes, unlikes } = this.state;
    return (
      <div>
        <span>좋아요</span>
        <button
          onClick={() => {
            this.setState({
              likes : likes + 1
            },
            () => {
                console.log('좋아요를 누른 뒤 입니다.');
            });
            
          }}
        >
          {likes}
        </button>

        <span>싫어요</span>
        <button
          onClick={() => {
            // this.setState으로 state값을 변경합니다.
            this.setState({ unlikes: unlikes + 1 });
          }}
        >
          {unlikes}
        </button>
      </div>
    );
  }
}

export default ColorClass;
