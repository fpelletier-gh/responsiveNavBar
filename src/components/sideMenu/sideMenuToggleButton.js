import React from "react"
import "./sideMenuToggleButton.scss"

const SideMenuToggleButton = ({ toggleMenu }) => {
  return (
    <button className="toggle-button" onClick={toggleMenu}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </button>
  )
}

export default SideMenuToggleButton
