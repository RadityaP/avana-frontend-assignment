//import package
import React, { useState } from "react"
import { useSelector } from "react-redux"

//import assets and style
import logo from "../../assets/logo.webp"
import avatar from "../../assets/avatar.png"
import "./index.css"

//import component
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  const [isChildHidden, setIsChildHidden] = useState({})
  const { dataMenu } = useSelector((state) => state.menu)

  return (
    <div className="container w-72 fixed flex flex-col items-center gap-10 inset-y-0 py-10 bg-navbg overflow-y-scroll">
      {/* Logo */}
      <img src={logo} alt="logo" className="logo px-[60px]"></img>
      {/* Avatar */}
      <div className="avatar-section flex px-[60px] flex-col items-center text-textwhite gap-4">
        <div className="avatar-container bg-white w-[70px] rounded-full h-[70px] overflow-hidden">
          <img src={avatar} alt="avatar"></img>
        </div>
        <h2 className="text-lg font-bold">Avriza Bramantyo</h2>
      </div>
      {/* Sidebar Menu */}
      <ul className="main-menu self-start flex flex-col w-full gap-3 text-navtext">
        {dataMenu.map((data, index) => {
          return (
            <SidebarItem
              data={data}
              isChildHidden={isChildHidden}
              setIsChildHidden={setIsChildHidden}
              key={index}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
