import React from "react";
import "./App.css";
import NewCool from "./Component";
import ColorClass from "./ColorClass";
import Say from './Say';

const App = () => {
  return (
    <div>
      <h1>하루 습관 100일 챌린지</h1>
      <NewCool adjective="쿨한" favorite="Adore You">
        children 박스
      </NewCool>
      <ColorClass color="red" />
      <Say />
    </div>
  );
};

export default App;
