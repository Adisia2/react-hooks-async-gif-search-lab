import React from "react";
import GifListContainer from "./GifListContainer";

function GifList({ gifs }) {
  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.original.url} alt="gif" />
      ))}
    </div>
  );
}

export default GifList;