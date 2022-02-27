//import package
import React from "react"
import { useSelector, useDispatch } from "react-redux"

//import style and asset
import "./index.css"

//import redux
import { changeMenu } from "../../redux/action/menuAction"

//import component
import Button from "../Button"

const MainView = () => {
  const dispacth = useDispatch()
  const { dataMenu } = useSelector((state) => state.menu)

  const onChangeStatus = (data) => {
    dispacth(changeMenu(data))
  }

  //function for searching for id of the menu, and change its status
  const onChange = (type, dataToChange, dataMenu, selectedChild, parentArray, childId) => {
    switch (type) {
      case "PARENT":
        onChangeStatus({ ...dataMenu, [dataToChange]: dataMenu[dataToChange] ? false : true })
        break
      case "CHILD":
        let editedData = parentArray.findIndex((data) => data.id === childId)
        parentArray[editedData] = {
          ...parentArray[editedData],
          [dataToChange]: selectedChild[dataToChange] ? false : true,
        }
        onChangeStatus({ ...dataMenu, childs: [...dataMenu.childs] })
        break
      default:
        return
    }
  }

  return (
    <div className="main-container">
      {dataMenu.map((data, aa) => {
        return (
          <div>
            <div className="flex items-center gap-10 justify-between mb-4">
              <h1>{data.name}</h1>
              <Button
                isAllowed={data.isAllowed}
                isShowed={data.isShowed}
                onChangeIsAllowed={() => onChange("PARENT", "isAllowed", data)}
                onChangeIsShowed={() => onChange("PARENT", "isShowed", data)}
              />
            </div>
            {data.isAllowed ? (
              <div className={`content`}>
                <p>{data.isShowed ? "Content is showed" : "Content is hidden"}</p>
                {data.childs &&
                  data.childs.map((firstChild, firstIndex) => {
                    return (
                      <div className="child-container">
                        <div className="flex items-center gap-10 justify-between mb-4">
                          <h1>{firstChild.name}</h1>
                          <Button
                            isAllowed={firstChild.isAllowed}
                            isShowed={firstChild.isShowed}
                            onChangeIsAllowed={() =>
                              onChange(
                                "CHILD",
                                "isAllowed",
                                data,
                                firstChild,
                                data.childs,
                                firstChild.id
                              )
                            }
                            onChangeIsShowed={() =>
                              onChange(
                                "CHILD",
                                "isShowed",
                                data,
                                firstChild,
                                data.childs,
                                firstChild.id
                              )
                            }
                          />
                        </div>
                        {firstChild.isAllowed ? (
                          <div className={`child-content`}>
                            <p>{firstChild.isShowed ? "Content is showed" : "Content is hidden"}</p>
                            {firstChild.childs &&
                              firstChild.childs.map((secondChild, secondIndex) => {
                                return (
                                  <div className="another-child-container">
                                    <div className="flex items-center gap-10 justify-between mb-4">
                                      <h1>{secondChild.name}</h1>
                                      <Button
                                        isAllowed={secondChild.isAllowed}
                                        isShowed={secondChild.isShowed}
                                        onChangeIsAllowed={() =>
                                          onChange(
                                            "CHILD",
                                            "isAllowed",
                                            data,
                                            secondChild,
                                            data.childs[firstIndex].childs,
                                            secondChild.id
                                          )
                                        }
                                        onChangeIsShowed={() =>
                                          onChange(
                                            "CHILD",
                                            "isShowed",
                                            data,
                                            secondChild,
                                            data.childs[firstIndex].childs,
                                            secondChild.id
                                          )
                                        }
                                      />
                                    </div>
                                    {secondChild.isAllowed ? (
                                      <div className="another-child-content">
                                        <p>
                                          {secondChild.isShowed
                                            ? "Content is showed"
                                            : "Content is hidden"}
                                        </p>
                                        {secondChild.childs &&
                                          secondChild.childs.map((thirdChild, thirdIndex) => {
                                            return (
                                              <div className="another-another-child-container">
                                                <div className="flex items-center gap-10 justify-between mb-4">
                                                  <h1>{thirdChild.name}</h1>
                                                  <Button
                                                    isAllowed={thirdChild.isAllowed}
                                                    isShowed={thirdChild.isShowed}
                                                    onChangeIsAllowed={() =>
                                                      onChange(
                                                        "CHILD",
                                                        "isAllowed",
                                                        data,
                                                        thirdChild,
                                                        data.childs[firstIndex].childs[secondIndex]
                                                          .childs,
                                                        thirdChild.id
                                                      )
                                                    }
                                                    onChangeIsShowed={() =>
                                                      onChange(
                                                        "CHILD",
                                                        "isShowed",
                                                        data,
                                                        thirdChild,
                                                        data.childs[firstIndex].childs[secondIndex]
                                                          .childs,
                                                        thirdChild.id
                                                      )
                                                    }
                                                  />
                                                </div>
                                                {thirdChild.isAllowed ? (
                                                  <div className="another-another-child-content">
                                                    <p>
                                                      {thirdChild.isShowed
                                                        ? "Content is showed"
                                                        : "Content is hidden"}
                                                    </p>
                                                  </div>
                                                ) : (
                                                  <div>Content Deactivated</div>
                                                )}
                                              </div>
                                            )
                                          })}
                                      </div>
                                    ) : (
                                      <div>Content Deactivated</div>
                                    )}
                                  </div>
                                )
                              })}
                          </div>
                        ) : (
                          <div>Content Deactivated</div>
                        )}
                      </div>
                    )
                  })}
              </div>
            ) : (
              <div>Content Deactivated</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default MainView
