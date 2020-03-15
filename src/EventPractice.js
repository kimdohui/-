import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: ""
  };

  render() {
    return (
      <div>
        <h1>이벤트test</h1>
        <input
          type="text"
          name="message"
          placeholder="입력해주세요"
          value={this.state.message}
          onChange={e => {
            this.setState({
              message: e.target.value
            });
          }}
        />

        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ""
            });
          }}
        >
          확인버튼
        </button>
      </div>
    );
  }
}

export default EventPractice;
