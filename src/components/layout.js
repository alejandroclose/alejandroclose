/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import gatsby from "../images/gatsby-icon.png"

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

  return (
    <>
      <Header siteTitle=""/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1020,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main
        >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Designed in Barcelona by <a href="http://www.alejandraferrer.es" target="_blank">Alejandra Ferrer</a>. Built by Alejandro Close on
          {` `}
          <img className="icon"src={gatsby}/>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
