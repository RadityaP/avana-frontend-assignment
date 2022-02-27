import React from "react"

const Button = (props) => {
  return (
    <div className="flex items-center gap-10">
      <button
        onClick={() => props.onChangeIsAllowed()}
        className="py-2 px-4 rounded-md"
        style={{ backgroundColor: !props.isAllowed ? "rgb(34 197 94)" : "rgb(248 113 113)" }}
      >
        {props.isAllowed ? "Deactivate" : "Activate"}
      </button>
      <button
        onClick={() => props.onChangeIsShowed()}
        className="py-2 px-4 rounded-md"
        style={{ backgroundColor: !props.isShowed ? "rgb(34 197 94)" : "rgb(248 113 113)" }}
      >
        {props.isShowed ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default Button
