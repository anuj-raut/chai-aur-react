import React, { useState } from "react";
import { useEffect } from "react";

function Github(){
    const [data , setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/anuj-raut')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    return(
        <div className="bg-rose-700 text-center text-white m-4 p-4 text-3xl">
            GitHub Followers:{data.followers}
            {/* agar apne pasand kh photo upload krna ha tb yh wala use kro
            <img src="https://images.pexels.com/photos/450054/pexels-photo-450054.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-112571-450054.jpg&fm=jpg" alt="image" /> */}
        {/* //warna Api sh photo lene ha tab yh wala use kro.. */}
        <img src={data.avatar_url}alt="Git picture" />
        </div>
    )
}
export default Github