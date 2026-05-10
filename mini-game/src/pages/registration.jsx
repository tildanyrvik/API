import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Registration () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [list, setList] = useState([]);

    const addStorage = () => {
        localStorage.setItem(username, password);
        setList((l) => [...l, localStorage.getItem("key")]);
        setUsername("");
        setPassword("");
    }
    useEffect(() => {
        setList([localStorage.getItem(username)]);
    }, []);

    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange= {(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange= {(e) => setPassword(e.target.value)} />
            <button onClick={addStorage}>Register</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            <li><Link to="/login">Already a member? Sign in here.</Link></li>
            </ul>
        </div>
    )
}

export default Registration;