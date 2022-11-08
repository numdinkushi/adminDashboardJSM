import React from "react"

export const Button = ({ bgColor, color, size, text, borderRadius, icon, bgHoverColor, width }) => {
  return<button
  type="button"
  // onClick={() => setIsClicked(initialState)}
  style={{ backgroundColor: bgColor, color, borderRadius }}
  className={` 
  text-${size} p-3 w-${width} 
  hover:drop-shadow-xl4
   hover:bg-${bgHoverColor}
   `}
  >
  {icon} {text}
  </button>
}

