// context API
import React, { useState, createContext } from 'react'

export const Context = createContext();

export const ContextProvider = () => {
    // add global-variables here.
    const [username, setUsername] = useState("");


    return <Context.Provider value={username, setUsername}>{children}</Context.Provider>;
};