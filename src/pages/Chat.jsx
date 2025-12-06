import React, { useEffect, useRef, useState } from "react";
import { Search, MoreVertical, Send, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import MessageBubble from "../components/ui/MessageBubble";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { sendMessagesToServer } from "../service/chat.service";
import { v4 as uuidv4 } from "uuid";

const CHATS = [
    {
        id: 1,
        name: "Spring Boot ...",
        lastMessage: "How to create rest api in springboot?",
        unread: 2,
        intials: "SB",
    },
    {
        id: 2,
        name: "React Helper",
        lastMessage: "Can you suggest hook for this ?",
        unread: 0,
        intials: "RH",
    },
    {
        id: 3,
        name: "Design",
        lastMessage: "Updated mockups uploaded to figma.",
        unread: 3,
        intials: "DE",
    },
    {
        id: 4,
        name: "Database Team",
        lastMessage: "Schema migration planned for tonight.",
        unread: 2,
        intials: "DB",
    },
    {
        id: 5,
        name: "DEVOPS",
        lastMessage: "Stagging deployment completed successfully.",
        unread: 0,
        intials: "DO",
    },
    {
        id: 6,
        name: "US research",
        lastMessage: "Interview slots available next week.",
        unread: 5,
        intials: "UX",
    },
];

const CONVERSTIONS = [
    {
        id: 1,
        author: "Lizza",
        message: "Hello! How can I assist you with Spring Boot today?",
        at: new Date().toLocaleDateString(),
    },


];
// video 1:25:40
function Chat() {

    const [messages, setMessages] = useState(CONVERSTIONS);
    const [draft, setDraft] = useState("");
    const endRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [conversationId, setConversationId] = useState("");
    useEffect(() => {
        const id = uuidv4();
        setConversationId(id);
    }, []);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    async function sendMessages() {
        const textMessage = draft.trim();
        if (!textMessage) return;

        console.log("Sending message:", draft);
        // console.log("conversationId:", conversationId);
        //video 1:43:20


        const responseFromAI = await sendMessagesToServer(draft, conversationId);

        console.log("responseFromAI:", responseFromAI);

        setMessages([
            ...messages,
            {
                id: uuidv4(),
                author: "bot",
                message: responseFromAI,
                at: new Date().toLocaleDateString(),
            },
        ]);

    }

    return (
        // <div className=" fixed top-0 left-0 right-0 mx-auto min-h-screen max-w-7xl grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x">
        <div className="fixed top-0 left-0 right-0 mx-auto h-screen max-w-7xl grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x">


            {/* Sidebar */}
            <aside className="flex flex-col border-r">
                <div className="p-3 flex items-center gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                    </Button>

                    <div className="relative border w-full rounded">
                        <input
                            placeholder="Search Chats..."
                            type="text"
                            className="h-9 w-full pl-8 rounded"
                        />
                        <Search className="h-4 w-4 pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                </div>
                <Separator />
            </aside>

            {/* Chat Area */}
            <section className="h-full border-l flex flex-col min-h-0">

                {/* Header */}
                <div className="flex items-center justify-between gap-3 px-4 py-3 border-b">
                    <div className="flex gap-3">
                        <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback className="text-xs">SB</AvatarFallback>
                        </Avatar>

                        <div className="leading-tight">
                            <div className="text-sm font-medium">Liza Support</div>
                            <div className="text-xs text-muted-foreground">
                                Online · Typing…
                            </div>
                        </div>
                    </div>

                    <div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Search className="h-4 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-3" />
                        </Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 min-h-0">
                    <div className="mx-auto max-w-3xl px-6 py-6 space-y-6">
                        {messages.map((chat, index) => (
                            <MessageBubble key={index} author={chat.author} at={chat.at}>
                                {chat.message}
                            </MessageBubble>
                        ))}
                    </div>
                    <div ref={endRef}> </div>
                </ScrollArea>

                {/* compose */}
                <div className="border-t p-3">
                    <div className="mx-auto flex max-w-3xl items-center gap-3">

                        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write a message..." className={'flex-1 rounded-3xl;'} />
                        <Button enabled={!sending} onClick={sendMessages} className={'rounded-3xl px-5'}>
                            <Send className="mr-1 h-4 w-4" /><span>Send</span>
                        </Button>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Chat;
