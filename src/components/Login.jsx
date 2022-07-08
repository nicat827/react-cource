import React, { useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/Button/Button';
import classes from '../UI/Button/Button.module.css'
import { AuthContext, ModalContext } from '../context';
import { useContext } from 'react';
import { useEffect } from 'react';
const Login = () => {
    const {setAuth} = useContext(AuthContext)
    const {setModal} = useContext(AuthContext);
    const {nickname, setNickname} = useContext(AuthContext)
    const {password, setPassword} = useContext(AuthContext)


    const login = (ev) => {
        ev.preventDefault()
        setAuth(true)
        setModal(false)
        localStorage.setItem('auth', 'true')
        localStorage.setItem('nickname', 'true')
        

    }

    const changeNickname = (event) => {
         setNickname(event.target.value)
         
    }

 

    

    return (
        
           <form>
                    <div
                        className='login__form'>
                        <Input placeholder='Имя пользователя' value={nickname} onChange={changeNickname}  autoComplete='off' />
                        <Input placeholder='Пароль' type='password' value={password} onChange={(event) => setPassword(event.target.value)} autoComplete='off'/>
                        <Button onClick={login} className={classes.log__btn}>Войти</Button> 
                    </div> 
                    
                </form>  
        
    );
};

export default Login;
