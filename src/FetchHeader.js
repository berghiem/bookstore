import { useFetchHeader } from "./useFetchHeader";
import { render } from "@testing-library/react";
import { useFetch } from "./useFetch";

export function FetchHeader (
    { 
        uri,
        typemethod,
        body,
        renderSuccess,
        loadingFallback = <p>loading...</p>,
        renderError = error =>(
            <pre>eror kenapa</pre>
        )
    }
){
    console.log(`uri Fetchheader : ${uri}`);
   
    const{loading, data, error} = useFetchHeader(uri,typemethod,body);
    console.log("data");
    console.log(data);
    if(loading) return loadingFallback;
    if(error) return renderError(error);
    if(data) return renderSuccess({data});
}