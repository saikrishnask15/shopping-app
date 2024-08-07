import { useEffect, useState } from "react";

const UseFetch = () => {
    const [response,setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async(url)=>{
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            if(data && data.length > 0){
                setResponse(data);
            }
        } catch (error) {
            console.log(error);
            setError(error);
        }
        finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
            fetchData();
    }, []);
    // console.log(response);
    return {response, error, isLoading};
}
 
export default UseFetch;
