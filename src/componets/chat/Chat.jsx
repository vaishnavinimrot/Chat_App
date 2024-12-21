import React, { useState, useEffect, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([
    { text: "Hey there! Yeah, it’s been ages. I’m doing good, just busy with work. How about you?", sender: "other" },
    { text: "Hey! Long time no see. How have you been?", sender: "self" },
   
 
    { text: "That’s awesome! Where did you go?", sender: "other" },
    { text: "Same here! Work’s been hectic. But I managed to take a short vacation last week.", sender: "self" },
    { text: "Looks like you had a great time!", sender: "other" },
    { text: "Yeah, it was amazing! I went to the beach.", sender: "self" },
    { text: "Sounds perfect! I need a vacation too.", sender: "other" },
    { text: "You should! It’s always good to take a break.", sender: "self" },
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
    if (text.trim() || image) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text, sender: "self", image }, // Send text and image
      ]);
      setText(""); // Clear input after sending the message
      setImage(null); // Clear the image after sending
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Save the image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="chat">
      {/* Top Section */}
      <div className="top">
        <div className="userr">
          <img src="./dp1.jpeg" alt="User Avatar" />
          <div className="texts">
            <span>Riya</span>
            <p>Typing......</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone" />
          <img src="./video.png" alt="Video" />
          <img src="./info.png" alt="Info" />
        </div>
      </div>

      {/* Center Section */}
      <div className="center">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "self" ? "own" : ""}`}>
            {message.sender === "other" && <img src="./dp1.jpeg" alt="User Avatar" />}
            <div className="texts">
              
              <p>{message.text}</p>
              {message.image && <img src={message.image} alt="Sent Image" className="message-image" />}
              <span>1 min ago</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="icons">
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <img src="./img.png" alt="Attach" />
          </label>
          <img src="./camera.png" alt="Camera" />
          <img src="./mic.png" alt="Microphone" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="Emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="picker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
