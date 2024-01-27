import React from 'react'
import MovieCad from './MovieCad'

const MovieList = ({list,handleDelete,handleEdit}) => {
    console.log(list)
  return (
    <div className='movie-list' >
        {
            React.Children.toArray(list.map(el=><MovieCad movie={el} handleDelete={handleDelete}  handleEdit={handleEdit} />))
        }
    </div>
  )
}

export default MovieList