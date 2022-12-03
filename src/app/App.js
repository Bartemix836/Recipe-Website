import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../styles/style-app/App.css';
import Chat from './Chat';
import Sidebar from "./Sidebar";
import {selectUser} from '../features/userSlice';
import Login from './Login';
import { useEffect } from "react";
import {auth} from '../firebase';
import { login, logout} from "../features/userSlice";




function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  useEffect(() => {
    document.title = "Our Comunnity"
  }, []);

  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            dispatch
            (login({
              id: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName,
            })
          );
        }
        else{
            dispatch(logout());
        }
      });
  }, [dispatch]);
  
  return (
    <div className="App">
        
      {/* What happend if user login correct and incorrect */}
        {user?(
          <>
            <Sidebar/>
            <Chat/>
          </>
        ) : (
          <Login/>
        )}
          
    </div>
  );
}

export default App;
