import {useState,useEffect} from 'react'
import axios from 'axios'

const usePostDate = (url, data) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=> {

    },[url, data])

    const submitData = () => {
        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.post(
            url,
            data,
            {
                signal : abortConnection.signal,
                headers :{
                    Authorization : 'Bearer ' +token
                }
            }
        )
        .then(response => {
            setResponse(response);
            setError(null);
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return {response, isLoading, error, submitData};
}
 
export default usePostDate;