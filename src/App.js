import './App.css';

import React, { useState } from 'react'
import { moviesData } from './data';
import MovieList from './components/MovieList';
import AddNewMovie from './components/AddNewMovie';
import Search from './components/Search';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1)
  const handleText=(x)=>setText(x);
  const handleRating=(x)=>setRating(x)
  const handleDelete=(id)=>setMovies(movies.filter(el=>el.id!==id));
  const handleAdd=(newMovie)=>setMovies([...movies,newMovie] )
  const handleEdit=(editedMovie)=>setMovies(movies.map(el=>el.id===editedMovie.id?editedMovie:el))
  return (
    <div className='App' >
      <Search  handleRating={handleRating} handleText={handleText} rating={rating}text={text} />
      <AddNewMovie handleAdd={handleAdd} />
      <MovieList list={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating
        )}  handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}

export default App