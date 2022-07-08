import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthContext, ModalContext } from '../context';
import Button from '../UI/Button/Button';
import CustomLink from '../UI/Links/CustomLink';
import cl from '../UI/Links/CustomLink.module.css'
import Modal from '../UI/Modal/Modal';
import classes from '../UI/Button/Button.module.css'

import Input from '../UI/input/Input';
import Login from '../components/Login';

const Layout = () => {
    const {isAuth, setAuth} = useContext(AuthContext)
    const {nickname, setNickname} = useContext(AuthContext)
    const {modal, setModal} = useContext(AuthContext)
    const {isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <h1>Подождите...</h1>
    }

    const logout = () => {
        setAuth(false)
        localStorage.removeItem('auth')
        localStorage.removeItem('nickname')
    }
    
    
    
   
   

    return (
        <>
        <header className='header'>
        
            <img src={require("../icons/title.png")} className='magic__title' />
            <CustomLink to='/mines'>Мины</CustomLink>
            <CustomLink to='/wheel'>Колесо чудес</CustomLink>
            <CustomLink to='/classic'>Джекпот</CustomLink>
            <Modal visible={modal} setVisible={setModal}>
               <Login/>
            </Modal>
            
            <div className='header__end'>
            {isAuth
            ? 
            <>
            <CustomLink to='/profile'>{nickname.toUpperCase()}</CustomLink>
            
            <Button onClick={logout} className={classes.header__exit__btn}>Выйти</Button>
            </>
            : 
            <Button onClick={() => setModal(true)} className={classes.header__exit__btn}>Войти</Button>
            }
            
               
            
            
            
            </div>
        
        
        </header>
        <Outlet/>
        
        </>
    );
};

export default Layout;