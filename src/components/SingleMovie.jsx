import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Singlemovie {id} </h1>
    </>
  )
}

export default SingleMovie


