import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProfilePic from "../components/profile-pic"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="cv">
      <div className="profile">
        <div className="profile-pic">
          <ProfilePic />
        </div>
        <div>
          asdf
        </div>
      </div>
      <div className="experience">
        fda
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
