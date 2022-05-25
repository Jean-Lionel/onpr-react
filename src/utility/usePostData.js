import {useEffect, useState} from 'react'
import axios from 'axios'

const usePostDate = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [finished, setFinished] = useState(false)
    // Get Token in local storage

    useEffect(() => {
        return () => {
            
        };
    }, [finished]);

    const submitData = async (url, data) => {
          const abortConnection = new AbortController();
          const token = localStorage.getItem('token');
            setIsLoading(true);
            setFinished(false);
            try {
                const response = await axios.post(url, data, {
                signal : abortConnection.signal,
                    headers :{
                        Authorization : 'Bearer ' +token
                }
                });
                setResponse(response);
                setError(null);
                setFinished(true);
            } catch (error) {
                console.error(error.message);
                setError(error)
            } finally {
                setIsLoading(false);
        }
    }

  

    return {response, isLoading, error,finished,  submitData};
}
 
export default usePostDate;