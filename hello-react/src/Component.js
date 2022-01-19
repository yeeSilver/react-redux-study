import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const NewCool = (props) => {
  const { adjective, children, favorite } = props;
  return (
    <div>
      <div className="colorbox">
        나의 새롭고 {adjective} 컴포넌트와 {children}
      </div>
      <div>제일 자주 듣는 노래는 {favorite} 입니다.</div>
    </div>
  );
};

NewCool.defaultProps = {
  adjective: "유용한",
};

NewCool.propTypes = {
  adjective: PropTypes.string,
  favorite: PropTypes.string.isRequired,
};
export default NewCool;
//왜 component로 선언하면 안되는 거지?
