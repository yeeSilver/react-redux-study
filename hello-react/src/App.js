import React from "react";
import "./App.css";

function App() {
  // const category = '집들이 선물';
  const category = "생일 선물";
  const first_color = "red";
  const number = 0;
  const style = {
    backgroundColor: "darkgreen",
    color: "gold",
  };

  return (
    <div>
      <h1>하루 습관 100일 챌린지</h1>
      <p style={style}>{category}편</p>
      <p>Let's Do IT</p>
      <article className="today">today</article>
      {category === "집들이 선물" ? (
        <button>집들이 선물</button>
      ) : (
        <button>생일 선물</button>
      )}

      {first_color === "red" ? <p>강렬한 레드를 고르셨군요</p> : null}
      {first_color === "red" && <p>강렬한 레드를 고르셨군요</p>}
      {number && <p>숫자가 0일때</p>}
      <div>할 일을 입력하세요.</div>
      <input />
      <div>
        <h1>들여쓰기가 이상한</h1>
        <h2>코드</h2>
        <p>입니다.</p>
      </div>
    </div>
  );
}

export default App;
