import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast';

const useGetMessages = () =>{
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversetion} = useConversation()


  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try{
        const res = await fetch(`/api/messages/${selectedConversetion._id}`);
        const data = await res.json();
        if(data.error) throw new Error(data.error)
          setMessages(data)

      }catch (error){
        toast.error(error.message);

      }finally{
        setLoading(false);

      }
    }


    if(selectedConversetion?._id)getMessages();

  },[selectedConversetion?._id,setMessages])

  return {messages,loading}
}
export default useGetMessages;