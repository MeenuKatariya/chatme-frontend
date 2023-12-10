import './App.css';
import { Button } from "@chakra-ui/button";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Chat from './Pages/chat';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/"  Component={Home}  exact/>
      <Route path="/chats" Component={Chat} />
     </Routes>
    </div>
  );
}

export default App;
