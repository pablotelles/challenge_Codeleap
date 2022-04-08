const EDIT_POST = 'EDIT_POST'

export function editPostActions (item) {
  return {
    type: EDIT_POST,
    payload: item
  }
}
