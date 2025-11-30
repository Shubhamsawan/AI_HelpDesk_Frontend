import React,{useEffect,useRef,useState} from 'react';
import { Search,MoreVertical,Send,Plus } from 'lucide-react';  
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ScrollArea } from '../components/ui/scroll-area';
import{Separator} from '../components/ui/separator';    
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

const CHATS = [
    {id:1,
    name:"Spring Boot ...",
    lastMessage:"How to create rest api in springboot?",
    unread:2,
    intials:"SB"
    }, 
    {id:2,
    name:"React Helper",
    lastMessage:"Can you suggest hook for this ?",
    unread:0,
    intials:"RH"
    }, 
    {id:3,
    name:"Design",
    lastMessage:"Updated mockups uploaded to figma.",
    unread:3,
    intials:"DE"
    }, 
    {id:4,
    name:"Database Team",
    lastMessage:"Schema migration planned for tonight.",
    unread:2,
    intials:"DB"
    },
    {id:5,
    name:"DEVOPS",
    lastMessage:"Stagging deployment completed successfully. ",
    unread:0,
    intials:"DO"
    },
    {id:6,
    name:"US research",
    lastMessage:"Interview slots available next week . ",
    unread:5,
    intials:"UX"
    }
];
//video start from 35:20
const CONVERSTIONS = [{

}]
function Chat(){
    return <div>Chat</div>
}

export default Chat;