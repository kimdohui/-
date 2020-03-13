import React, { Component } from "react";
import propTypes from "prop-types";

const MyComponent = ({ name, FavoriteNum, children }) => {
  //const { name, children } = props;   //비구조화 할당(위(매개변수 부분) 대신 사용하기도 함)
  return (
    <div>
      나의 이름은 {name} 이다.
      <br />
      children값은 {children}이다.
      <br />
      내가 가장 좋아하는 숫자는 {FavoriteNum}이다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름"
};

MyComponent.propTypes = {
  name: propTypes.string,
  FavoriteNum: propTypes.number.isRequired
};
//위의 코드 사용 시 props의 타입을 지정할 수 있다(string은 문자열)
//isRequired 사용하면 proptype지정을 안할경우 경고가 뜨게 한다.

export default MyComponent;
/*위의 코드는 다른 파일에서 이 파일을 import할때 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다. */

/* 아래는 클래스형 컴포넌트 변환 예시*/

/*
class MyComponent extends Component {
  //static defaultProps = {name : '기본이름'}
  //static propTypes = {   name: propTypes.string, FavoriteNum: propTypes.number.isRequired}
  //위처럼 class내부에서 defaultprops와 propType 지정이 가능하다
  
  render() {
    const {name, FavoriteNum, children} = this.props; // 비구조화 할당
    return (
      <div>
        나의 이름은 {name} 이다.
      <br />
      children값은 {children}이다.
      <br />
      내가 가장 좋아하는 숫자는 {FavoriteNum}이다.
      </div>
    )
  }
}

MyComponent.defaultProps = {
  name: "기본 이름"
};

MyComponent.propTypes = {
  name: propTypes.string,
  FavoriteNum: propTypes.number.isRequired
};

export default MyComponent;
*/
