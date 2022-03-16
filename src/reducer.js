import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits.filter((story) => story.title !== null),
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      } // action.payload is the id that we passed in removeStory()
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    case HANDLE_PAGE:
      // for increase
      if (action.payload === 'increase') {
        let nextPage = state.page + 1

        if (nextPage > state.nbPages - 1) {
          /* since this is technically not an array, and last page is 49 */

          /* if nextPage is bigger than 49, then go back to page "0" */
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }

      // for decrease
      if (action.payload === 'decrease') {
        let prevPage = state.page - 1

        if (prevPage < 0) {
          prevPage = state.nbPages - 1
        }
        return { ...state, page: prevPage }
      }

    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
