//import package
import React from "react"

//import assets and style
import dropdown from "../../assets/down.png"

const SidebarItem = (props) => {
  const onClickButtonDropdown = (id) => {
    props.setIsChildHidden({
      ...props.isChildHidden,
      [id]: props.isChildHidden[id] ? false : true,
    })
  }

  return !props.data.childs ? (
    <li className="main-list px-[60px] py-3.5 relative cursor-pointer">{props.data.name}</li>
  ) : (
    <div className="have-childern">
      <li className="main-list px-[60px] py-3.5 relative cursor-pointer">
        {props.data.name}
        <img
          src={dropdown}
          alt="dropdown-icon"
          className={`dropdown-icon absolute w-[30px] right-5 top-2/4 cursor-pointer ${
            props.isChildHidden[props.data.id] ? "rotate" : ""
          }`}
          onClick={() => onClickButtonDropdown(props.data.id)}
        ></img>
      </li>
      {/* Child Menu */}
      {props.isChildHidden[props.data.id] && (
        <ul className="child-container flex flex-col gap-3 ml-[60px] mt-2.5 items-end">
          {props.data.childs.map((child, index) => {
            return (
              <li className="child py-3.5 px-10 w-full ml-[60px] cursor-pointer" key={index}>
                {child.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SidebarItem
