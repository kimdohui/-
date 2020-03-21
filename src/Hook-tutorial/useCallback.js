import React, { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseCallBack = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]); //컴포넌토 초기 렌더링될때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> {avg}
      </div>
    </div>
  );
};

export default UseCallBack;

//useCallback의 첫번째 피라미터에는 생성하고싶은 함수를 넣고, 두번째 피라미터에는 배열을 넣어야 한다.
// 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.
//- (비어있으면 렌더링될때 한 번만 생성, 넣으면 그 값이 바뀌거나 새로운 항목이 추가될때 함수가 생성)

//아래와 같이 숫자,문자,객체처럼 일반 값을 재사용할땐 useMemo를, 함수를 재사용할땐 useCallback을 사용한다.(두 코드는 같다.)
/*

useCallback(() => {
  console.log("hello");
}, []);

useMemo(() => {
  const fn = () => {
    console.log("hello");
  };
  return fn;
}, []);

 */
