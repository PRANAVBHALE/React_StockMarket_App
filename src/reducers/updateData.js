import {UPDATE_DATA} from '../actions'
import {updateNewDataList} from '../helpers'

export default function UpdateData (state=[],action) {
  switch (action.type) {
    case UPDATE_DATA:
      return updateNewDataList(action.payload)

    default: return state

  }
}
