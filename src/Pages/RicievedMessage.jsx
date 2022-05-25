import { Box, Divider, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CardMessage from "../components/admin/Declaration/CardMessage";
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import Admin from "./Admin";

const RicievedMessage = () => {
    const {data, error, isLoading } = useFetchDataWithPagination("declarations")
     const [unreadMessages, setUnreadMessages] = useState([]);
     const [readMessages, setReadMessages] = useState([])

     useEffect(() => {
        if(data?.data){
            setUnreadMessages(data?.data?.data.filter(message => message.is_opened === 0))
            setReadMessages(data?.data?.data.filter(message => message.is_opened === 1))
        }
    }, [data])

    return ( 
        <Admin>
           
            {isLoading && <LinearProgress color="success" />}  
            {error && <p>Error: {error.message}</p>}
            <Box    ml={5} mr={5}>
                {unreadMessages && unreadMessages.map(message => (
                    <Box key={message.id}>
                        <CardMessage message={message}/>
                        <Divider />
                    </Box>
                ))}

            {readMessages && readMessages.map(message => (
                  <Box key={message.id}>
                      <CardMessage message={message}/>
                      <Divider />
                  </Box>
              ))}
            </Box>
        </Admin> 
    );
}
 
export default RicievedMessage;