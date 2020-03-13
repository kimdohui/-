import React from "react";

const MyComponent = props => {
  return (
    <div>
      나의 이름은 {props.name} 이다.
      <br />
      children값은 {props.children}이다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름"
};

export default MyComponent;
/*위의 코드는 다른 파일에서 이 파일을 import할때 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다. */
