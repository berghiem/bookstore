  import { useEffect, useState } from "react";

export function useFetchHeader(uri,method,body){
    const [data,setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [token, setToken] = useState(localStorage.getItem('token'));

    console.log(`uri usefetchheader: ${uri}  `);
    console.log(`method usefetchheader: ${method}  `);
    useEffect(()=>{
        if(!uri) return;
        fetch(uri,{
            method,
            body,
            headers : {'Authorization':`Bearer ${token}`}
        })
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