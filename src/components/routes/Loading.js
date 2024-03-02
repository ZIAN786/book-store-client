import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingGIF from "../../images/loading.gif";


export default function Loading ({path = "login"}) {
//state
const [count, setCount] = useState(10);
//hooks
const navigate = useNavigate();
const location = useLocation();


useEffect (()  => {
 const interval = setInterval(() => {
    setCount((currentCount) => --currentCount);
 }, 1000);
 //redirect once count is equal to 0
count === 0 && navigate(`/${path}`, {
    state: location.pathName,
});
//cleanup
return () => clearInterval(interval);
}, [count]);

return <div className="d-flex justify-content-center align-items-center vh-100">
    <img src={LoadingGIF} alt="Loading" />
    </div>;
};