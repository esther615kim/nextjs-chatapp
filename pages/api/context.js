// context API
import React, { useState, createContext } from 'react'

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    // add global-variables here.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <Context.Provider value={username, setUsername, password, setPassword}>{children}</Context.Provider>;
};