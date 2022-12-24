import React, { useState } from "react";
function Assets(props) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    props.handleAdd(input);
    e.preventDefault();
    setInput("");
  }
  return (
    <div>
      <div className="title">Assets</div>
      <div className="list-box">
        <ul>
          {props.value.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            pattern="^[a-zA-Z][a-zA-Z0-9]{0,19}$"
            required
          />
          <input type="submit" value=" " />
        </form>
      </div>
    </div>
  );
}
export default Assets;
