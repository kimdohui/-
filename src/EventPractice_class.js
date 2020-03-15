import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };

  //key값 설정
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //설정된 값 출력(경고창으로)과 초기화
  handleClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  //엔터키 입력 시 실행
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
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
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>확인버튼</button>
      </div>
    );
  }
}

export default EventPractice;
