import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnText, hasIcon, className, onClick,  }) => {
  return (
    <div>
      {/* <Link to={to}> */}
        <button
          onClick={onClick}
          className={`bg-[#111827] hover:bg-[#111827]/90 text-white font-bold py-2 px-4 rounded ${className}`}
        >
          {hasIcon}
          {btnText}
        </button>
      {/* </Link> */}
    </div>
  );
};

export default Button;
