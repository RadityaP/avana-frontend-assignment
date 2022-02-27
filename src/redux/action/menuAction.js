export const CHANGE_STATUS = "CHANGE_STATUS"

const changeMenu = (data) => ({
  type: CHANGE_STATUS,
  payload: data,
})

export { changeMenu }
