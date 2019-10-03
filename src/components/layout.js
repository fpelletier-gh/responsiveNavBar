/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideMenu from "./sideMenu/sideMenu"
import Header from "./header"
import "./layout.scss"
import Backdrop from "./backdrop/backdrop"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  const handleSideMenuClick = () => {
    setToggleSideMenu(!toggleSideMenu)
  }

  const handleBackdropClick = () => {
    setToggleSideMenu(false)
  }

  return (
    <div style={{ height: "100%" }}>
      {toggleSideMenu ? <Backdrop handleClick={handleBackdropClick} /> : null}
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleMenu={handleSideMenuClick}
      />
      <SideMenu sideMenuOpen={toggleSideMenu} />
      <main style={{ marginTop: "3rem" }}>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
