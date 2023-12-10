import React, { useEffect, useState } from 'react';
import axios from "axios"

const  Chat = () => {
    const [chats, setChats ] = useState([])
      const fetchChats = async() => { 
     const { data } = await axios.get("http://localhost:3000/api/chat");
      setChats(data)

      };


    useEffect (() =>{
      fetchChats();
    }, [])
  return (
    <div >
      {
        chats? chats.map((chat) =>(
            <div key ={chat.id}>
                {
                    chat.chatName
                }
            </div>
        ))
 
         : null
      }
    </div>
  )
}

export default Chat
