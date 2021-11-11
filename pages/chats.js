import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import dynamic from "next/dynamic"; // dynamic importing-quill doesn't support Next.JS
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>

    import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
);

function chats() {

    const { username, password } = useContext(Context);
    const { chats, setChats } = useState(false);
    const router = useRouter();
    return (
        <div>
            <h3>채팅채팅</h3>
        </div>
    )
}

export default chats
