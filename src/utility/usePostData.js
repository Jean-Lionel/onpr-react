import {useEffect, useState} from 'react'
import axios from 'axios'

const usePostData = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [finished, setFinished] = useState(false)
    // Get Token in local storage

    useEffect(() => {
        return () => {
            
        };
    }, [finished]);

    const submitData = async (url, data, method="post") => {
          const abortConnection = new AbortController();
          const token = localStorage.getItem('token');
            setIsLoading(true);
            setFinished(false);
            try {
                const response = method === 'post' ? await axios.post(url, data, {
                signal : abortConnection.signal,
                    headers :{
                        Authorization : 'Bearer ' +token
                }
                }) : (
                        method === 'put' ? await axios.put(url, data, {
                            signal: abortConnection.signal,
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        }) : await axios.delete(url, data, {
                            signal: abortConnection.signal,
                            headers: {
                                Authorization: 'Bearer ' + token
                            }
                        })   
                ) ;

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
 
export default usePostData;