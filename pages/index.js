import React, { useContext } from 'react';
import { Context } from './api/context';
import { useRouter } from "next/router"
import axios from "axios";


const KEY = "a0440163 - e9c4 - 471a-ba8d - f37ed8e9963b"


export default function Login() {
  const { username, setUsername, password, setPassword } = useContext(Context);
  const router = useRouter();

  function handleSubmit(e) {
    console.log("유저정보", username, password);
    //   //no input
    //   if (!username || !password) return;

    //   //get chatengine api
    //   axios.put(
    //     "https://api.chatengine.io/users/",
    //     { username, password },
    //     { headers: { "Private-Key": KEY } }
    //   ).then(
    //     response => {
    router.push("/chats");
    //     }
    //   ).catch(error => {
    //     console.log(error.message);
    //   })
    //   e.preventDefault();
  }

  return (
    <div className="background">
      <div className="wrapper">
        {/* add form submit event */}
        <form className="form"
          onSubmit={handleSubmit}
        >
          <div className="title">My Next-Chat-App</div>

          <div className="input-container">
            <input type="text" placeholder="your email address" className="input" onChange={e => setUsername(e.target.value)} />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              className="input"
              //add password-statement
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
