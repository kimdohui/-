import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; //ref설정을 하는 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  //props로 받아 온 값을 state에 동기화시킴
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //컴포넌트를 생성하고, 첫 랜더링을 다 한후 실행(이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출, 이밴트 등록 등 비동기 작업 처리)
  componentDidMount() {
    console.log("componentDidMount");
  }

  //props나 state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메서드(이 메서드에서는 반드시 true또는 false값을 반환해야 함)
  //이 메서드를 따로 생성하지 않으면 기본적으로 true값을 반환하고, false값을 반환할 경우 업데이트 과정은 중단됨
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
    //마지막 숫자가 4면 리랜더링 하지 않음
  }

  //컴포넌트를 DOM에서 제거할 때 실행(이곳에서 등록한 이벤트,타이머 등 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 함)
  componentWillMount() {
    console.log("componentWillMount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getsnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리렌더링을 완료한 후 실행함. 업데이트가 끝난 후, DOM 관련 처리를 해도 무방
  // prevProps, prevState를 사용해 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있으며  getSnapshotBeforeUpdate의 반환값이 있다면 shapshot을 전달받을 수 있음
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
