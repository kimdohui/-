import React, { useState } from "react";

const EventPractice_function = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangemessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeypress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      이벤트test
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChangemessage}
        onKeyPress={onKeypress}
      />
      <button onClick={onClick}>확인버튼</button>
    </div>
  );
};
export default EventPractice_function;

/*여기부터는 객체를 사용

import React, { useState } from "react";

const EventPractice_function = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form, //기존 form값 복사(...)
      [e.target.name]: e.target.value
    };
    console.log(nextForm);
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  const onKeypress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      이벤트test
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeypress}
      />
      <button onClick={onClick}>확인버튼</button>
    </div>
  );
};
export default EventPractice_function;
*/
