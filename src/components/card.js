import React from "react"
import { Link } from "gatsby"
import { render } from "react-dom"
import "./card.css"

const Title = (props) => {
  return(<div className="card">
    <div className="title"><h2>{props.title}</h2></div>
    <div className="content">
      {props.children}
    </div>
  </div>
  )
}

export default Title