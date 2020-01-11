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
        <div className="personal-data">
          <div className="cv-name">
            <h1>ALEJANDRO CLOSE</h1>
          </div>
          <div className="contact">
          <div>September 9, 1987</div>
            <div><a href="tel:+34622826408">+(34) 622 826 408</a></div>
            <div><a href="mailto: alejandroclose@gmail.com">alejandroclose (at) gmail.com</a></div>
          </div>
          <div className="social-media">
          <div><a href="github.com/alejandroclose">/alejandroclose</a></div>
          <div><a href="linkedin.com/in/alejandroclose">/in/alejandroclose</a></div>
          </div>
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
