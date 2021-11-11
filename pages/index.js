import React, { useContext } from 'react';
import { Context } from './api/context';
import { useRouter } from "next/router"


export default function Login() {
  const { username, setUsername, password, setPassword } = useContext(Context);
  const router = useRouter();

  return (
    <div className="background">
      <div className="wrapper">
        {/* add form submit event */}
        <form action="submit" className="form">
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
