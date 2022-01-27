import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState(""); //초기값 설정
  const [clothes, setClothes] = useState('');
  const city = () => setMessage("🌆"); //state값 변경
  const nature = () => setMessage("🏝");
  const swim = ()=> setClothes('🏄‍♀️swimming suit');
  const pajsamas = ()=> setClothes('🤱pajamas');

  return (
    <div>
      <p>쉬는 날! 어딜 가고 싶으신가요?</p>
      <button onClick={city,pajsamas}>도시쥐, 도시가 좋아</button>
      <button onClick={nature,swim}>자연, 알로하~!</button>
  
      <p>{message}</p>
      <p>{clothes}</p>
    </div>
  );
};

export default Say;