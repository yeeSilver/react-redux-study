import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  //여기서 &는 the enclosing selector 즉, button을 가리킵니다.
  &:hover {
    background: yellow;
  }
  &:active {
    background: green;
  }

  /* 버튼이 2개 이상일 경우 */

  & + & {
    margin-left: 1rem;
  }
`;

//children props : 컴포넌트 안에 텍스트 넣기
function Button({ children, ...rest }) {
  return (
  <StyledButton {...rest}>{children}</StyledButton>
    )
  
}

export default Button;