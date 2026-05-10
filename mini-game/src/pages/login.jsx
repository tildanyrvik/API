import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const processLogin = () => {
        const storedPassword = localStorage.getItem(username);
    
    if (storedPassword === password) {
         navigate("/game");
    }else {
        alert("Wrong username or password");
    }
    }



    return(
        <div>
            <input type="text" placeholder="Username" value={username} onChange= {(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange= {(e) => setPassword(e.target.value)} />
            <button onClick={processLogin}>Sign in</button>
        </div>
    )
}

export default Login;