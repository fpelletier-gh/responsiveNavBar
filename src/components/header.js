import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import SideMenuToggleButton from "../components/sideMenu/sideMenuToggleButton"

const Header = ({ siteTitle, toggleMenu }) => {
  // console.log(toggleMenu)
  // const handleSideMenuToggleButtonClick = () => {
  //   toggleMenu()
  // }
  return (
    <header className="header">
      <nav className="header-navigation">
        <div className="btn-side-menu-toggle">
          <SideMenuToggleButton toggleMenu={toggleMenu} />
        </div>
        <div className="header-logo">
          <Link to={"/"}>{siteTitle}</Link>
        </div>
        <div className="spacer"></div>
        <div className="header-nav-items">
          <ul>
            <li>
              <Link to={"/users/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
