//import package
import React from "react"

//import assets and style
import dropdown from "../../assets/down.png"

const SidebarItem = (props) => {
  //function for handling dropdown open or close
  const onClickButtonDropdown = (id) => {
    props.setIsChildHidden({
      ...props.isChildHidden,
      [id]: props.isChildHidden[id] ? false : true,
    })
  }

  //function for handling If child menu has another child menu
  const SecondChildSidebarItem = ({ secondChild, width }) => {
    //if child doesn't has another child
    return !secondChild.childs ? (
      secondChild.isAllowed && secondChild.isShowed ? (
        <li
          className={`child py-3.5 relative px-10 ml-[60px] cursor-pointer`}
          style={{ width: width }}
        >
          {secondChild.name}
        </li>
      ) : (
        ""
      )
    ) : //if child has another child

    secondChild.isAllowed && secondChild.isAllowed ? (
      <>
        <li
          className={`child py-3.5 relative px-10 ml-[60px] cursor-pointer`}
          style={{ width: width }}
        >
          {secondChild.name}
          <img
            src={dropdown}
            alt="dropdown-icon"
            className={`dropdown-icon absolute w-[20px] right-5 top-2/4 cursor-pointer ${
              props.isChildHidden[secondChild.id] ? "rotate" : ""
            }`}
            onClick={() => onClickButtonDropdown(secondChild.id)}
          ></img>
        </li>
        {props.isChildHidden[secondChild.id] && (
          <ul className="child-container flex flex-col gap-3 ml-[60px] mt-2.5 items-end">
            {secondChild.childs.map((child, index) => {
              return (
                <SecondChildSidebarItem
                  secondChild={child}
                  width={parseInt(width - 20)}
                  key={index}
                />
              )
            })}
          </ul>
        )}
      </>
    ) : (
      ""
    )
  }

  return !props.data.childs ? (
    props.data.isAllowed && props.data.isShowed ? (
      <li className={`main-list px-[60px] py-3.5 relative cursor-pointer`}>{props.data.name}</li>
    ) : (
      ""
    )
  ) : props.data.isAllowed && props.data.isShowed ? (
    <div className="have-childern">
      <li className={`main-list px-[60px] py-3.5 relative cursor-pointer`}>
        {props.data.name}
        <img
          src={dropdown}
          alt="dropdown-icon"
          className={`dropdown-icon absolute w-[20px] right-5 top-2/4 cursor-pointer ${
            props.isChildHidden[props.data.id] ? "rotate" : ""
          }`}
          onClick={() => onClickButtonDropdown(props.data.id)}
        ></img>
      </li>
      {/* Child Menu */}
      {props.isChildHidden[props.data.id] && (
        <ul className="child-container flex flex-col gap-3 ml-[60px] mt-2.5 items-end">
          {props.data.childs.map((child, index) => {
            return <SecondChildSidebarItem secondChild={child} width={200} key={index} />
          })}
        </ul>
      )}
    </div>
  ) : (
    ""
  )
}

export default SidebarItem
