import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import './styles/App.css'
import {AuthContext, ModalContext} from './context/index.js'
import Layout from './pages/Layout';
const App = () => {
  const [isAuth, setAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true)
      
      
    }

    setLoading(false)
  } ,[])




  return (
    
      <AuthContext.Provider value={{
        isAuth,
        setAuth,
        isLoading,
        modal,
        setModal,
        nickname,
        setNickname,
        password,
        setPassword,
      }}
      >
        <AppRouter/>
        
      </AuthContext.Provider>

    
    
    
  );
};

export default App;