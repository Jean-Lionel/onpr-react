import {useState,useEffect} from 'react'
import axios from 'axios'

const usePostData = (url, postData) => {

    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // Get Token in local storage
    
    useEffect(()=> {
        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.post(
            url,
            postData,
            {
            signal : abortConnection.signal,
            headers :{
                Authorization : 'Bearer ' +token
            }
        })
        .then(response => {
            setData(response);
            setError(null);
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

        return () => abortConnection.abort()

    },[url, postData])

    return {data, isLoading, error};

}
 
export default usePostData;