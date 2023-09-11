import React from "react";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export const Cat = ({ name, value, handleChange, isCopying, toggleTape }) => {
  return (
    <div className="container">
      <h1>Copy Cat {name || "Tom"}</h1>
      <label htmlFor="copy-input"></label>
      <input
        id="copy-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={toggleTape}>
        <img
          alt={isCopying ? "copycat" : "quietcat"}
          src={isCopying ? images.copycat : images.quietcat}
        />
      </button>
      <p>{isCopying && value}</p>
    </div>
  );
};
export default Cat;
