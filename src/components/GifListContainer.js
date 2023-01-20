import React, {useState, useEffect } from 'react'
import GifList from './GifList'

function GifListContainer(){

    const [gifList, setGifList] = useState([])
  

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=lLfEoPXQPqhfwleLDV4A7KFNUA45E948&rating=g")
        .then(res => res.json())
        .then(data=>{
            setGifList(data.data)

            const firstThreeGifs = data.data.slice(0,3)
            setGifList(firstThreeGifs)
        }
        )
    }, [])

    return(
        <div>
            <GifList gifs={gifList}/>
        </div>
    )

}

export default GifListContainer;