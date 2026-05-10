import React from "react";
import { useEffect, useState } from "react";

function Registration () {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [list, setList] = useState([]);

    const addStorage = () => {
        localStorage.setItem(username, password);
        setList((l) => [...l, username]);
        setUsername("");
        setPassword("");
    }
    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange= {(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange= {(e) => setPassword(e.target.value)} />
            <button onClick={addStorage}>Register</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Registration;