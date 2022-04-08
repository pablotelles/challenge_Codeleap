const EDIT_POST = 'EDIT_POST'

const initialState = {
  show: true,
  item: []
}

export const PostEditReducer = (postState = initialState, action) => {
  console.log('reducer ok')
  switch (action.type) {
    case EDIT_POST: return {
      ...postState,
      show: true,
      item: action.payload
    }
    default: return postState
  }
}
