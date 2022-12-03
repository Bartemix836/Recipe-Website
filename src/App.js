import React from 'react';
import './style-app/App.css';
import Chat from './app/Chat';
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention 
    <div className="App">
        
        {/*Left side - sidebar*/}
        <Sidebar/>

        {/*Chat*/}
          <Chat/>
    </div>
  );
}


export default App;
