import { render } from "@testing-library/react";
import {useFetch} from "./useFetch";

export function Fetch(
    {
        uri,
        renderSuccess,
        loadingFallback = <p>loading...</p>,
        renderError = error =>(
            <pre>eror kenapa</pre>
        )                      
    }
){

    const{loading, data, error} = useFetch(uri);
    if(loading) return loadingFallback;
    if(error) return renderError(error);
    if(data) return renderSuccess({data});

}