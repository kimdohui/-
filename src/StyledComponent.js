import React from "react";
import styled, { css } from "styled-components";
/*단순 변수의 형태가 아닌 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css를 불러와야 함 */

/*props로 넣어 준 값을 직접 전달할 수 있음*/
const Box = styled.div`
background: ${props => props.color || "blue"};
padding 1rem;
display:flex;
width: 1024px;
margin: 0 auto;
/*기본 가로크기 1024px 가운데 정렬을 한뒤 가로크기가 작아짐에 따라 크기를 줄이고 768px미만이 되면 꽉 채움*/
@media (max-width: 1024px){
    width: 768px;
}
@media (max-width: 768px){
    width: 100%;
}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /*& 문자를 사용해 Sass처럼 자기자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /*inverted 값이 true일때 특정 스타일 부여 */
  /*props 참조시 css로 감싸주어 tagged템플릿 리터럴을 사용해야 함(css를 안쓰면 그냥 문자열로만 취급되서 신택스 하이라이팅이 제대로 이뤄지지 않고
    Tagged템플릿 리터럴이 아니라서 힘수를 받아 사용하지 못해 해당 부분에서 props값을 사용하지 못함)*/
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;

/* 이렇게 `를 사용하여 만든 문자열에 스타일정보를 넣어주는 문법을 Tagged 템플릿 리터럴이라 부른다.  */
