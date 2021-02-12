import React,{useState,useContext} from 'react';
import { login } from './login';

import {UserContext} from './UserContext';

const Home = () => {
    const {value,setValue}=useContext(UserContext);
    return (
        <div>
            <h2>Home</h2>
            <h2>{JSON.stringify(value,null,2)}</h2>
            {value ? (
            <button onClick={()=>{
                setValue(null)}}>
                    log out</button>)
            :(
            <button onClick={async ()=>{
                const value =await login();
                setValue(value)
            }}>log in</button>)}
        </div>
    )
}

export default Home
