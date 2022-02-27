//import package
import React from "react"

//import style and asset
import "./index.css"
import dataArr from "../../data/dummy-menu.json"

const MainView = () => {
  //    const SecondChild = () => {
  //        return (

  //        )
  //    }

  return (
    <div className="main-container">
      {dataArr.map((data, index) => {
        return (
          <div>
            <h1>{data.name}</h1>
            <div className={`content ${data.isAllowed ? "allowed" : "not-allowed"}`}>
              <p>{data.isAllowed ? "Content" : "Content deactivated"}</p>
              {data.childs &&
                data.childs.map((child, index) => {
                  return (
                    <div className="child-container">
                      <h1>{child.name}</h1>
                      <div className={`child-content`}>
                        <p>{child.isAllowed ? "Content" : "Content deactivated"}</p>
                        {child.childs &&
                          child.childs.map((ch, i) => {
                            return (
                              <div className="another-child-container">
                                <h1>{ch.name}</h1>
                                <div className="another-child-content">
                                  <p>{ch.isAllowed ? "Content" : "Content deactivated"}</p>
                                  {ch.childs &&
                                    ch.childs.map((c, i) => {
                                      return (
                                        <div className="another-another-child-container">
                                          <h1>{c.name}</h1>
                                          <div className="another-another-child-content">
                                            <p>{c.isAllowed ? "Content" : "Content deactivated"}</p>
                                          </div>
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MainView
