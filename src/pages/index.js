import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProfilePic from "../components/profile-pic"
import SEO from "../components/seo"
import Card from "../components/card"
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
            <h2 className="quote">Starting things that happen.</h2>
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
        <Card title="languages">
          <ul>
            <li>Spanish: Native</li>
            <li>English: Bilingual</li>
            <li>Catalan: Advanced</li>
            <li>French: Basic</li>
          </ul>
        </Card>
        <Card title="formal education">
          <div className="card-content">
            <div className="date">2018</div>
            <div className="details">Full Stack Web Development Part-time Bootcamp, MERN
            <div className="institution">Ironhack (Spain)</div>
            </div>
          </div>
          <div className="card-content">
            <div className="date">2015 - 2016</div>
            <div className="details">Management Development Program (PDD)
            <div className="institution">IESE Business School (Spain)</div>
            </div>
          </div>
          <div className="card-content">
            <div className="date">2014</div>
            <div className="details">PgDip, Mobile Marketing
            <div className="institution">Universitat de Barcelona (Spain)</div>
            </div>
          </div>
          <div className="card-content">
            <div className="date">2013</div>
            <div className="details">PgDip, Smart Grid
            <div className="institution">La Salle URL (Spain)</div>
            </div>
          </div>
          <div className="card-content">
            <div className="date">2012 - 2013</div>
            <div className="details">MS, Energy Efficency
            <div className="institution">Universitat de Barcelona (Spain)</div>
            </div>
          </div>
          <div className="card-content">
            <div className="date">2006 - 2010</div>
            <div className="details">BE, Civil Engineering
            <div className="institution">Universidad del Valle de Guatemala (Guatemala)</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="experience">
        <Card title="technical skills">
          asdf
        </Card>
        <Card title="work experience">
          <div className="card-content">
            <div className="date">2013 - Present</div>
            <div className="details">
              <div className="institution"><a href="https://www.holaluz.com/" target="_blank">Holaluz</a> (Spain)</div>
              <div className="position-details">Connecting people to green energy.</div>
            </div>
          </div>
          <div className="card-content-sub">
            <div className="date date-sub">Sept. 2015 - Present</div>
            <div className="details details-sub">
              <div><b>Business Development Manager</b></div>
              <div className="position-details">Hacking opportunities to grow in a scalable fashion.</div>
              <ul>
                <li>Responsible for establishing new partnerships and sales channels focused on B2C sellers.</li>
                <li>Inside sales team lead. Responsible for defining DTC sales' playbooks, staffing, and coaching.</li>
                <li>Lead the team that defined and developed the initial strategy of the natural gas business line including customer service, operations, and negotiations with suppliers.</li>
              </ul>
            </div>
          </div>
          <div className="card-content-sub">
            <div className="date date-sub">May 2013 - Aug. 2015</div>
            <div className="details details-sub">
              <div><b>Project Manager</b></div>
              <div className="position-details">Operations, web development and customer care.</div>
              <ul>
                <li>Implementation of Scrum and agile methodologies in the web development team.</li>
                <li>Definition and development of the company’s ERP platform, customer service CRM, sales website (front and back end), and web apps for sales teams.</li>
                <li>Started as the 13th team member of the entire company managing projects with partners, suppliers, and customers.</li>
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div className="date">Apr. 2011 - Apr. 2012</div>
            <div className="details">
              <div className="institution">Grupo Onyx (Guatemala)</div>
              <div className="position-details">Providing construction and maintenance of commercial facilities and telecommunications infrastructure.</div>
              <div><b>Project Manager</b></div>
              <div className="position-details">Project lead responsible of planning, deploying, staffing and procurment.</div>
              <ul>
                <li>Planning and deployment of earthworks, construction and remodeling projects.</li>
                <li>Procurement management of construction and remodeling projects.</li>
                <li>Supervision and quality control of civil and interior design works</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card title="side projects">
          ñlkj
        </Card>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
