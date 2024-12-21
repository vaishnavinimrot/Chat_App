import React, { useState } from "react";
import "./addUser.css";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");

  const handleAddUser = () => {
    if (username.trim()) {
      // Here you could also handle avatars and last messages if needed
      const newUser = {
        name: username,
        avatar: "./avatar.png", // You can use a dynamic avatar or leave it static
        lastMessage: "Hello!", // Default last message, can be changed
      };
      onAddUser(newUser);
      setUsername(""); // Reset input field
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
