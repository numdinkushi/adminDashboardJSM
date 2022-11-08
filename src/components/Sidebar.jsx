import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import React from "react"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

import { Link, NavLink } from "react-router-dom"
export const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    } 
  }
  const activeLink = 'flex items center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-white text-md m-2';
  const normalLink = 'flex items center gap-5 pl-4 pt-3 pb-2.5  rounded-lg  text-md text-gray-700 dark:text-gray- dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center mt-4 flex text-xl font-extrabold gat-3 ml-3 tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content={"Menu"} position="bottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item?.title}</p>
                  {item?.links?.map((link, index)=> (
                    <NavLink to={`/${link?.name}`}
                      key={index}
                      onClick = {handleCloseSideBar}
                      className={({isActive}) => isActive ? activeLink : normalLink}
                    >
                      {link?.icon}
                      <span className="capitalise"> {link.name}</span>
                    </NavLink>
                  ))}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}