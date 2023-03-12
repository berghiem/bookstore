import { useEffect, useState } from "react";

export function useFetch(uri){
    const [data,setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    console.log(`uri usefetch: ${uri} `);
   
    useEffect(()=>{
        if(!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError);
    },[uri]);

    return {
        loading,
        data,
        error
    };
}