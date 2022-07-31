import "./App.css";
import emojiDetails from "./Components/Data/Data";
import { useState } from "react";

function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const emoji = Object.keys(emojiDetails);
  const renderEmojiMeaning = (text) => {
    if (text == undefined) {
      setEmojiMeaning("This emoji is not available in our Database");
    } else if (text == "") {
      setEmojiMeaning("Your emoji meaning will appear here");
    } else {
      setEmojiMeaning(text);
    }
  };
  const clickHandle = (e) => {
    let text = emojiDetails[e];
    renderEmojiMeaning(text);
  };
  const inputHandle = (e) => {
    console.log(e.target.value);
    let text = emojiDetails[e.target.value];
    renderEmojiMeaning(text);
  };

  return (
    <div className="container">
      <div className="container-wrapper">
        <h2 className="heading">Know Your Emoji</h2>
        <input
          type="text"
          id="input-bar"
          placeholder="Put your emoji here to know the meaning"
          onChange={inputHandle}
        />
        <div id="output-text">{emojiMeaning}</div>
        <div id="emoji-we-have">
          {emoji.map((item) => {
            return (
              <span
                key={item}
                style={style.emoji}
                onClick={() => clickHandle(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const style = {
  emoji: {
    fontSize: "2rem",
    padding: "1rem",
  },
};

export default App;
