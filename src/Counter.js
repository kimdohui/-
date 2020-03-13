import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
      doubleNum: 0
    };
    //위의 값에 초깃값을 설정함(컴포넌트의 state는 객체 형식이여야 함)
  }
  //위는 생성자 메서드로 컴포넌트에서 constructor을 작성할땐 반드시 super(props)를 호출해야 함
  // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하는 리액트의 Component클래스가 지닌 생성자 함수를 호출함

  state = {
    //state값을 초기화하는 또다른 방법
    number: 0,
    fixedNumber: 0,
    doubleNum: 0
  };

  render() {
    const { number, fixedNumber, doubleNum } = this.state;
    return (
      <div>
        <h1>바뀌는 값 : {number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <h1>2씩 바뀌는 값 : {doubleNum}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); //setState함수를 이용해 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 }); // 두 번 사용해도 1씩 증가한다.(this.setState를 쓴다 해서 바로 state값이 변하지 않기 때문)
            this.setState({ number: number + 1 }, () => {
              console.log("SetState호출 ");
              console.log(this.state);
            }); //특정 작업 실행

            //위의 문제를 해결하기 위해선 아래와 같이 쓰면 된다.
            this.setState(prevState => {
              return { doubleNum: prevState.doubleNum + 1 };
            });

            this.setState(prevState => ({
              doubleNum: prevState.doubleNum + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
