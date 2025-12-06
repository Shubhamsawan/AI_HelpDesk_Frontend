import axios from 'axios'; 

const baseUrl = 'http://localhost:8081/api/v1';


export const sendMessagesToServer = async (message,converationId) => {
    const response = await axios.post(`${baseUrl}/ai`,message,{
        headers:{
            ConversationId: converationId
        },
    }); 
    return response.data;
};