import React, { useEffect, useState } from "react";

function API () {
    const [dogImage, setDogImage] = useState([ ]);
    const fetchData = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogImage(data);
        }
        catch (error){
            console.log("Error fetching data:", error);
        };
    };
    useEffect(() => {fetchData();}, []);
    const generateImage = () => {
        fetchData();
    }

    return(
        <div>
            <p>Message: {dogImage.message}</p>
            <br />
            <button oncClick={generateImage}>Generate new image</button>
        </div>
    );
};

export default API;