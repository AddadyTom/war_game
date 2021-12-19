import React from "react";
import { ChatEngine } from "react-chat-engine";

const Chat = (props) => {

  return (
    <ChatEngine
      projectID="e0eedb92-ac65-4874-bffe-77b925f38dac"
      userName={props.user.name}
      userSecret={props.user.pass}
    />
  );
};

export default Chat;