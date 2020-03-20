import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState(" ");
  const [nickname, setNickname] = useState("");

  /*렌더링할 때 실행
  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log({
      name,
      nickname
    });
  });
  */

  /*마운트될 때만 실행
  useEffect(() => {
    console.log("마운트될 때만 실행");
  }, []);
  */

  /*특정 값이 업데이트될 때만 실행
  useEffect(() => {
    console.log(name);
  }, [name]);
*/

  //뒷정리 함수 반환(컴포넌트가 언마운트되기전이나 업데이트전 작업을 수행)
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  /*언마운트될 때만 뒷정리 함수를 호출하고 싶다면 두번째 피라미터에 빈 배열을 넣음
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);
  */

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <div>
          <b>이름 : </b> {name}
        </div>

        <div>
          <b>별명 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;

//useEffect 사용해보기
//useEfferct : 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
