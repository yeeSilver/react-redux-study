import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Polished from './components/Polished';
// div 를 스타일링 하고 싶으면 styled.div 
// input을 스타일링 하고 싶으면 styled.input
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  //color라는 props값 넣어주기
  //color props 값을 설정해줬으면 해당 값을 배경색으로 설정하고, 그렇지 않으면 빨간색 배경색으로 사용하도록
  background: ${props => props.color || 'red'};
  border-radius: 50%;
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <Circle/>;
      <Circle color="blue" />;
      <AppBlock>
        <Button>BUTTON</Button>
        <Button>BUTTON</Button>
      </AppBlock>

        {/* ThemeProvider 내부에 렌더링된 styled-components 로 만든 컴포넌트에서 palette 를 조회하여 사용 할 수 있습니다 ex-palette.blue*/}
          <ThemeProvider
          theme={{
            palette: {
              gray: '#495057',
              pink: '#f06595'
            }
          }}
          >
          <AppBlock>
            <Polished>BUTTON</Polished>
            <Polished color="gray">BUTTON</Polished>
            <Polished color="pink">BUTTON</Polished>
          </AppBlock>
        </ThemeProvider>
      );
    </>
 
      );
}

export default App;