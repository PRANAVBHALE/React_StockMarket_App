export const UPDATE_DATA = 'UPDATE_DATA';

export function lookSouceData(newList) {

  return {
    type:UPDATE_DATA,
    payload : newList
  }
}
