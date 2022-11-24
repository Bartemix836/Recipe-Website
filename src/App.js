import React from 'react';
import './style-app/App.css';

import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention 
    <div className="App">
        
        {/*Left side - sidebar*/}
        <Sidebar/>

        {/*Right side - Posts and Chat*/}
        
    </div>
  );
}

export default App;
