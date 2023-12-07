import React from 'react'
import useFavorites from '../hooks/favorites';

const Favorites = () => {
  const { getFavorites } = useFavorites();
  return (
    <>
    <div>Favorites</div>
    {getFavorites().map(fav => <div key={fav}>{fav}</div>)}
    </>
  )
}

export default Favorites