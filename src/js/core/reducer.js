function useReducer(action, initialState, state, props) {
  switch (action) {
    case 'UPDATE_STEPS':
      const newState = {
        ...initialState,
        ...props,
        ...state,
      }
      sessionStorage.setItem('persiste_store', JSON.stringify(newState))
      return newState
    default:
      throw new Error()
  }
}

export const dispatchevent = (state, action) => {
  const newEvent = new CustomEvent('UPDATE_STATE', {
    detail: { state, action },
  })
  document.dispatchEvent(newEvent)
}

export default useReducer
