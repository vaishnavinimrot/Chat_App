import React, { useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  // List of users and their last messages
  const [users, setUsers] = useState([
    { name: "Ayansh", avatar: "./n7.jpeg", lastMessage: "Thank you👍" },
    { name: "Riya", avatar: "./dp1.jpeg", lastMessage: "Byeeee" },
    { name: "Suhana", avatar: "./dp6.jpeg", lastMessage: "hii vaishnavi🖐️" },
    { name: "Gima", avatar: "./n1.jpeg", lastMessage: "Okk" },
    { name: "Kartik", avatar: "./n2.jpeg", lastMessage: "where are you?" },
    { name: "Ragini", avatar: "./n3.jpeg", lastMessage: "Done😊" },
    { name: "Ananya", avatar: "./n4.jpeg", lastMessage: "Nice👌" },
    { name: "Neetu", avatar: "./n5.jpeg", lastMessage: "Thank you👍" },
    { name: "Somya", avatar: "./n6.jpeg", lastMessage: "Hello" },
    { name: "Hitesh", avatar: "./n7.jpeg", lastMessage: "bye" },
  { name: "Aisha", avatar: "./dp2.jpeg", lastMessage: "Good😊" },
  ]);

  // Function to handle adding new users
  const addUserToChatList = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="toggle add mode"
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {/* Rendering users */}
      {users.map((user, index) => (
        <div className="item" key={index}>
          <img src={user.avatar} alt="user avatar" className="avatar" />
          <div className="texts">
            <span>{user.name}</span>
            <p>{user.lastMessage}</p>
          </div>
        </div>
      ))}

      {/* Show AddUser component when addMode is true */}
      {addMode && <AddUser onAddUser={addUserToChatList} />}
    </div>
  );
};

export default ChatList;
