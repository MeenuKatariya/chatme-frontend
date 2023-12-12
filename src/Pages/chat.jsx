import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { Box } from "@chakra-ui/react";
import { ChatContext } from "../Context/ChatProvider";
const Chat = () => {
  const { user } = useContext(ChatContext);
  return (
    <div style={{ width: "100%" }}>
      
      {user && <SideDrawer />}

      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chat;
