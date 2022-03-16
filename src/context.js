import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true, // state for loading
  hits: [], // what we are getting back from response.
  query: 'react',
  page: 0,
  nbPages: 0, // number of pages, by default 0 => for first page
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })

    try {
      const response = await fetch(url)
      const data = await response.json()

      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  useEffect(() => {
    // when app loads, fetch the stories
    const url = `${API_ENDPOINT}query=${state.query}&page=${state.page}`
    console.log(url)
    fetchStories(url)
  }, [state.query, state.page])

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
