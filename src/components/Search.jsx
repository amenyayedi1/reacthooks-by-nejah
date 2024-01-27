import React from 'react'
import StarRating from './StarRating'

const Search = ({handleText,handleRating,rating,text}) => {
  return (
    <div>
        <form >
            <input type="text" value={text} onChange={e=>handleText(e.target.value)} />
            <StarRating rating={rating} handleRating={handleRating} />
        </form>
    </div>
  )
}

export default Search