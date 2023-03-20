import {
    Routes,
    Route,
    Link,
    Navigate,
    Outlet
} from 'react-router-dom';
import { useState } from 'react';

const ProtectedRoute = ({
    isAllowed,
    role,
    redirectPath = '/home',
    children
}) => {

    const [roleof, setRole] = useState(localStorage.getItem("roles"));
    console.log(`is Allowed : ${!isAllowed}, role : ${role}`);
    console.log(`iini navbar, role localstorage : ${roleof}`);

    if(role != null && roleof!=null && roleof.includes(role)){
        console.log("tidak navigate");
        return children ? children : <Outlet/> ;
    }

    return <Navigate to = {redirectPath} replace />

    // if(!isAllowed){
    //     console.log("navigate to home harunya");
    //     return <Navigate to = {redirectPath} replace />
    // }
    // console.log("tidak navigate");
    // return children ? children : <Outlet/> ;

}

export default ProtectedRoute;