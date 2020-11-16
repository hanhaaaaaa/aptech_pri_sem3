import React from "react";
import "../../assets/styles/header.scss";

function Header() {
  return (
    <>
      <div className="ecosite">ECOSITE</div>
      <div className="menu">
        <span>Surveys</span>
        <span>FAQs</span>
        <button>Sign in</button>
      </div>
    </>
  );
}
export default Header;
