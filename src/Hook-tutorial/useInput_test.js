import React from "react";
import useInputs from "./Hook-tutorial/useInputs";

const test = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>

      <div>
        <b>별명 : </b> {nickname}
      </div>
    </div>
  );
};

export default test;
