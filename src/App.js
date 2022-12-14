import React, { useEfect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
// import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, ChartsHeader, Stacked, LineCharts, ThemeSettings } from "./components"
import { useStateContext } from "./contexts/ContextProvider"

import "./App.css"
import {
  Area,
  Bar,
  Calender,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Orders,
  Pie,
  Pyramid,
  Line
} from "./pages"

function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>

    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content={"Settings"} position="top">
            <button
              onClick={()=> setThemeSettings(true) }
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar darK:bg-main-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "ml-72" : "flex-2 "
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark navbar w-full">
            {" "}
            <Navbar />{" "}
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              <Route path="/order" element={<Orders />} />
              <Route path="/orders" element={<Orders />} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calender />} />
              {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>

    </BrowserRouter>
      </div>
  )
}

export default App
