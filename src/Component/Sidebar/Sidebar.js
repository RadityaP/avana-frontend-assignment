//import package
import React, { useState } from "react"

//import assets and style
import logo from "../../assets/logo.webp"
import avatar from "../../assets/avatar.png"
import "./index.css"

//import component
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  const [isChildHidden, setIsChildHidden] = useState({})

  const dataArr = [
    {
      id: "dashboard",
      name: "Dashboard",
    },
    {
      id: "my_orders",
      name: "My Orders",
      childs: [
        {
          id: "my_products_A",
          name: "My Products A",
        },
        {
          id: "my_products_B",
          name: "My Products B",
          childs: [
            {
              id: "my_products_B_1",
              name: "My Products B_1",
            },
          ],
        },
      ],
    },
    {
      id: "my_products",
      name: "My Products",
      childs: [
        {
          id: "my_products_A",
          name: "My Products A",
        },
        {
          id: "my_products_B",
          name: "My Products B",
          childs: [
            {
              id: "my_products_B_1",
              name: "My Products B_1",
            },
          ],
        },
      ],
    },
    {
      id: "settings",
      name: "Settings",
    },
  ]

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
        {dataArr.map((data, index) => {
          return (
            <SidebarItem
              data={data}
              isChildHidden={isChildHidden}
              setIsChildHidden={setIsChildHidden}
              key={index}
            />
          )
        })}

        {/* <li className="main-list active">Dashboard</li>
        <li className="main-list">My Orders</li>
        <div className="have-childern">
          <li className="main-list">
            My Products
            <img
              src={dropdown}
              alt="dropdown-icon"
              className={`dropdown-icon ${hide ? "rotate" : ""}`}
              onClick={() => setHide(!hide)}
            ></img>
          </li>
          {hide && (
            <ul className="child-container">
              <li className="child">Products A</li>
              <div className="child">
                Products B
                <div className="have-childern">
                  <li className="main-list">
                    My Products
                    <img
                      src={dropdown}
                      alt="dropdown-icon"
                      className={`dropdown-icon ${hide ? "rotate" : ""}`}
                      onClick={() => setHide(!hide)}
                    ></img>
                  </li>
                  {hide && (
                    <ul className="child-container">
                      <li className="child">Products A</li>
                      <li className="child">Products B</li>
                    </ul>
                  )}
                </div>
              </div>
            </ul>
          )}
        </div>
        <li className="main-list">Dashboard</li>
        <li className="main-list">My Orders</li> */}
      </ul>
    </div>
  )
}

export default Sidebar
