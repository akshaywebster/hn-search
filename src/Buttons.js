import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className="btn-container">
      {/* diable the button while loading */}
      <button disabled={isLoading} onClick={() => handlePage('decrease')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('increase')}>
        next
      </button>
    </div>
  )
}

export default Buttons
