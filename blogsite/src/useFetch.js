import { useEffect, useState } from "react"

function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url).then((res)=>{
            if(!res.ok){
                throw Error('Could not fetch data!')
            }
            return res.json();
        }).then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch((err)=>{
            console.log(err);
            setError(err.message);
            setIsLoading(false);
        })
    }, [url]) //when ever the url changes, it fires this useEffect


    return {data, isLoading, error}
}

export default useFetch