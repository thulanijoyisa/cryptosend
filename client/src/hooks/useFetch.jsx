import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({keyword}) => {
    const [gifURL, setgifURL] = useState("");

    const fetchGIFs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}^limit=1`);
            const {data}   = await response.json();

            setgifURL(data[0]?.images?.downsized_medium?.url);
            
        } catch (error) {
            setgifURL('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');
        }
    }

    useEffect(() => {
    if(keyword) fetchGIFs();

    }, [keyword]);


  return gifURL;

}

export default useFetch;