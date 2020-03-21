import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const Onchange = e => {
    dispatch(e.target);
  };
  return [state, Onchange];
}

//useInput_test 컴포넌트에 사용
