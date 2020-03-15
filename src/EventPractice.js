import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };

  /* 밑에 함수 선언을 화살표 함수로 선언했다면 필요 없음(메서드 바인딩 과정이 따로 필요 없음)
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
*/
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트test</h1>
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="입력해주세요"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>확인버튼</button>
      </div>
    );
  }
}

export default EventPractice;
