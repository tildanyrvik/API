import React from "react";

function API () {
    const fetchData = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log("Error fetching data:", error);
        };
    };
    useEffect(() => {fetchData();}, []);

    return(
        <div>

        </div>
    );
};

export default API;