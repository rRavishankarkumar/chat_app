import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
       // const{id} = req.params.id;
        const{ id: reciverId } = req.params;
        const senderId = req.user_id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, reciverId] },
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        res.status(201).json(newMessage);
    }catch(error){
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"});
    }
};