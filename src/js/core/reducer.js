function useReducer(action, initialState, state, props) {
  console.log({
    action,
    initialState,
    state,
  })
  switch (action) {
    case 'UPDATE_STEPS':
      const newState = {
        ...initialState,
        ...props,
        ...state,
      }
      return newState
    default:
      throw new Error()
  }
}

export const dispatchvent = (state, action) => {
  // console.log({
  //   state,
  //   action,
  // })
  const newEvent = new CustomEvent('UPDATE_STATE', {
    detail: { state, action },
  })
  document.dispatchEvent(newEvent)
}

export default useReducer
