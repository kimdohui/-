import React from 'react'; /*리액트를 불러와 사용할 수 있게 해줌*/
import './App.css'  /*css파일에 style적용 후 연결하기*/ 

/*우리가 사용하는 문법은 JSX이다.*/
function App() {
  {/*JSX 특징
    1. 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸 주어야 한다.
        - 감쌀때에는 <Fragment>,<div>,<> 등 사용 가능하다.
    2. if문을 사용할 수 없다.(단 JSX밖이나 { } 안에 삼항 연산자를 사용하면 가능)
    3. 조건부 연산자를 통해 렌더링이 가능하다.(&& 과 ||) => return {name || '리액트'}등
    4. 스타일을 적용할때 -를 빼고 카멜 표기법으로 작성해야 한다.(backgroundColor,fontSize 등)
    5. class이름 지정 시 className이라는 키워드를 사용해야 함
    6. 태그를 꼭 닫아주어야 함
  7. 주석 작성 시 {} 안에 주석을 넣어야 함(주석을 아무데나 작성 시 출력될 수 있음)*/} 
   const name = '리액트';
   
   const style = {
     backgroundColor : 'black',
     color : 'green',
     fontSize : '40px'
   };

  return (
  <>  
    <h1>{name} 안녕</h1>
    {name === '리액트' ? (<h1>리액트이다</h1>) : (<h1>리액트가 아니다.</h1>)}
    <div style={style}>{name}</div>
    <div className="react">{name}</div>
  </>
  );
}

export default App;
