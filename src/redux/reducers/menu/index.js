import dataMenu from "../../../data/dummy-menu.json"
import { CHANGE_STATUS } from "../../action/menuAction"

const initialState = {
  dataMenu,
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      let editedData = state.dataMenu.findIndex((data) => data.id === action.payload.id)
      state.dataMenu[editedData] = action.payload
      return {
        ...state,
      }
    default:
      return state
  }
}

export default menuReducer
