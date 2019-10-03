import React from "react"
import "./backdrop.scss"

const Backdrop = ({ handleClick }) => (
  <div className="backdrop" onClick={handleClick}></div>
)

export default Backdrop
