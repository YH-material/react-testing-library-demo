import "./App.css";
import Cat from "./Cat"
import { useState } from "react";

function App() {
  const [isCopying, setIsCopying] = useState(true);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const toggleTape = () => {
    setIsCopying(!isCopying);
  };

  return (
    <Cat
      value={input}
      isCopying={isCopying}
      handleChange={handleChange}
      toggleTape={toggleTape}
      data-testid="copied-text"
    />
  );
}

export default App;
