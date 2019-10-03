import React from "react"
import { Link } from "gatsby"
import "./sideMenu.scss"

const SideMenu = ({ sideMenuOpen }) => {
  let menuClasses = "side-menu"
  if (sideMenuOpen) {
    menuClasses = "side-menu open"
  }
  return (
    <nav className={menuClasses}>
      <ul>
        <li>
          <Link to={"/"}>Products</Link>
        </li>
        <li>
          <Link to={"/Users"}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
export default SideMenu
