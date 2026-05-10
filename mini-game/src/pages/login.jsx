import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login (){
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const processLogin = () => {
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === null) {
            alert("Username not found");
        } else if (storedPassword === password) {
            navigate("/game");
        } else {
            alert("Wrong password");
        }
    };

    return(
        <div>
            <h1>login</h1>
        </div>
    )
}

export default Login;