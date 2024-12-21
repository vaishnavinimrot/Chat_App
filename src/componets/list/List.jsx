import React from "react";
import "./list.css";
import Userinfo from "./userinfo/Userinfo";
import ChatList from "./chatlist/ChatList";

const List = () => {
  return <div class="list">
    <Userinfo/>
    <ChatList/>
    </div>;
};

export default List;
