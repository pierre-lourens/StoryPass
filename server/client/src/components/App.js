import React from "react";
import Input from "./InputForm.js";
import Story from "./Story.js";
import PromptButton from "./PromptButton"
import Prompt from "./Prompt"

function App() {
  return (
    <div>
      <p>Hello world</p>
      <PromptButton />
      <Prompt />
      <Input />
      <Story />
    </div>
  );
}

export default App;
