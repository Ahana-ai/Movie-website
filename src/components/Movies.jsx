import React, { useContext } from 'react'
import { AppContext } from '../context'

const Movies = () => {
  const { movie } = useContext(AppContext)
  return (
    <>
      {movie.map((currMovie) => {
        return <h1>{currMovie.Title}</h1>
      })}
    </>
  )
}

export default Movies

