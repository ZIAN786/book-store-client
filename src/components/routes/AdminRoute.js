import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth.js";
import Loading from "./Loading.js";
import axios from "axios";


export default function AdminRoute() {
    //context
    const [auth, setAuth] = useAuth();
    //state
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const adminCheck = async () => {
        const {data} = await axios.get(`/admin-check`);
            if(data.ok){
              setOk(true); 
            } else {
                setOk(false); 
            }
        };

    if (auth?.token) adminCheck();
    }, [auth?.token])


    return ok ? <Outlet /> : <Loading path="" />;
};