import React, { useEffect, useRef, useState } from 'react';
import { Search, MoreVertical, Send, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ScrollArea } from '../components/ui/scroll-area';
import { MessageBubble } from '../components/ui/MessageBubble';

import { Separator } from '../components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

const CHATS = [
    {
        id: 1,
        name: "Spring Boot ...",
        lastMessage: "How to create rest api in springboot?",
        unread: 2,
        intials: "SB"
    },
    {
        id: 2,
        name: "React Helper",
        lastMessage: "Can you suggest hook for this ?",
        unread: 0,
        intials: "RH"
    },
    {
        id: 3,
        name: "Design",
        lastMessage: "Updated mockups uploaded to figma.",
        unread: 3,
        intials: "DE"
    },
    {
        id: 4,
        name: "Database Team",
        lastMessage: "Schema migration planned for tonight.",
        unread: 2,
        intials: "DB"
    },
    {
        id: 5,
        name: "DEVOPS",
        lastMessage: "Stagging deployment completed successfully. ",
        unread: 0,
        intials: "DO"
    },
    {
        id: 6,
        name: "US research",
        lastMessage: "Interview slots available next week . ",
        unread: 5,
        intials: "UX"
    }
];
//video start from 35:20
const CONVERSTIONS = [
    {
        id: 1,
        author: "bot",
        message: "Hello! How can I assist you with Spring Boot today?",
        at: "10:00 AM",
    }, {
        id: 2,
        author: "user",
        message: "Can you help with the database migration ?",
        at: "10:01 AM",
    }, {
        id: 3,
        author: "bot",
        message: "Ok can you provide me the detail of your current database setup?",
        at: "10:03 AM",
    },

];
function Chat() {
    return (
        <div className="mx-auto min-h-screen max-w-7xl grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x">
            <div>
            {/* Sidebar */}
            {/* 47:49 video watch till */}
            <aside className="flex flex-col border-r">
                <div className="p-3 flex items-center gap-2">
                    <Button size={"icon"} variant={"outline"} className={"h-8 w-8"}>
                        <Plus className="h-4 w-4" />
                    </Button>
                    <div className="relative border w-full">
                        <input placeholder="Search Chats..." type="text" className="h-9 w-full pl-8 dark:border rounded" />
                        <Search className="h-4 w-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>
                <Separator/>
            </aside>
            </div>
            <section className="h-full">
                {/* Chat Area */}
                <div className="flex item-center justify-between gap-3 px-4 py-3 border-b">
                    <div className="flex gap-3"><Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className={"text-xs"}>SB</AvatarFallback>
                    </Avatar>
                        <div className="leading-tight">
                            <div className="text-sm font-medium">Liza Support</div>
                            <div className="text-xs text-muted-foreground">Online Typing...</div>
                        </div></div>
                    <div>
                        <Button variant={"ghost"} size={"icon"} className={"h-8 w-8"}><Search className={"h-4 w-3"} /></Button>
                        <Button variant={"ghost"} size={"icon"} className={"h-8 w-8"}><MoreVertical className={"h-4 w-3"} /></Button>
                    </div>
                </div>
<ScrollArea className={"flex-1"}>
    <div className="mx-auto max-w-3xl px-6 py-6 space-y-6">

        {
            CONVERSTIONS.map((chat,index) => (
                <MessageBubble key={chat.id} author={chat.author} at={chat.at}>
                    {chat.text}
                </MessageBubble>
            ))
        }
    </div>
</ScrollArea>
            </section>
        </div>
    );
}

export default Chat;