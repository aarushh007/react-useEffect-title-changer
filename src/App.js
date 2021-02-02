import { React, useState, useEffect } from "react";
import "./styles.css";

let run = 0;

export default function App() {
  const [title, setTitle] = useState(
    "Change this title and the website tab title"
  );
  const submit = () => {
    let newTitle = document.getElementById("input").value;
    setTitle(newTitle);
    document.getElementById("input").value = "";
  };
  useEffect(() => {
    if (run > 0) {
      document.title = title;
    }
    run++;
  });
  return (
    <div className="App">
      <h2>{title}</h2>
      <input type="text" id="input" placeholder="enter new title" />
      <button onClick={submit}>submit</button>
    </div>
  );
}
