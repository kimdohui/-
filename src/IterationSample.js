import React, { useState } from "react";

const IterationSample = () => {
  /* 데이터 배열 컴포넌트 배열로 변경하기
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;*/

  const [name, setName] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nexId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  //생성코드
  const onClick = () => {
    const nextNames = name.concat({
      id: nexId,
      text: inputText
    });
    setNextId(nexId + 1);
    setName(nextNames);
    setInputText("");
  };
  //삭제 코드
  const onRemove = id => {
    const nextNames = name.filter(name => name.id !== id);
    setName(nextNames);
  };

  const nameList = name.map(names => (
    <li key={names.id} onDoubleClick={() => onRemove(names.id)}>
      {names.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
