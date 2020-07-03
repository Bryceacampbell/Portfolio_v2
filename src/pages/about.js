import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage;
