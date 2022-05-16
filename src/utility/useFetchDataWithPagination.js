import {useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from "react-paginate";

const useFetchDataWithPagination = (url) => {

    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // Get Token in local storage
    const setUrl = (a) => {
        url = a
    }
    useEffect(()=> {
        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.get(url,{
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

    },[url])

    const changePage = ({selected}) => {
        setUrl(url + "?page=" + selected)

        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.get(url,{
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
    }

    const pageCount = Math.ceil(data?.data?.total / data?.data?.per_page);

    const paginate = () => {
    
        return (
            <ReactPaginate
            previousLabel={"Précedent"}
            nextLabel={"Suivant"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousClassName=""
            activeClassName={"paginationActive"}
           />
        );
    }


    return {data, isLoading, error,paginate};
    
}
 
export default useFetchDataWithPagination;