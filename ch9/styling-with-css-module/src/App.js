import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import Bind from './components/Bind';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <>
    <div>
      <CheckBox onChange={onChange} checked={check}>
        어떤 os를 사용중인가요?
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? '애플' : '안드로이드'}
      </p>
    </div>
    
    <div>
    <Bind onChange={onChange} checked={check}>
        click check
      </Bind>
      <p>
        <b>check: </b>
        {check ? 'true' : 'false'}
      </p>
    </div>
    </>
  );
}

export default App;
