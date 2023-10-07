import React from 'react'

function MovieCard({movie}) {
  return (
    <a href = {`https://www.imdb.com/title/${movie.imdbID}`}>
    <div className ='flex flex-col w-[340px] h-[450px] bg-slate-400 shadow-2xl shadow-white '>
        <div className ='h-[410px] w-[100%] bg-black'>
            <img className ='object-fill h-[100%] w-[100%]' src={movie.Poster !== 'N/A'? movie.Poster: "https://via.placeholder.com/400"} alt={movie.Title} />
        </div>
        <div className ='bg-black text-white pl-3'>
            <span className='text-xl text-gray-200'>{movie.Type}</span>
            <h3 className='font-bold text-xl'>{movie.Title}</h3>
            <h2>{movie.Year}</h2>
            {console.log(movie.Title)}
        </div>
    </div>
    </a>
  )
}

export default MovieCard