import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState('');

  const textChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />
      <p>Ваш текст: {text}</p>
    </div>
  );
};

export default Input;
