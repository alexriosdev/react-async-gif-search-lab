import React from 'react'

const GifList = props => {
  return (
    <div>
      {props.gifs.map((gif, index) => <img key={index} src={gif}/>)}
    </div>
  )
}

export default GifList;