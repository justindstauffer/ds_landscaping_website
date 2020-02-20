import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Careers/info"

const Careers = () => (
  <Layout>
    <SEO title="Careers" />
    <Info />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Careers
