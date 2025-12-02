import React from "react";

function MessageBubble({key, author, at, children})  {

    const isMe = author
    return (<div className={'flex ${isMe == "user"}?:"justify-end":"justify-start"'}>MessageBubble</div>);
    // video time 1:02:50 
}

export default MessageBubble ;