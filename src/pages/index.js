import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/Header/header'
import HomeSection1 from '../components/HomeSection1/homeSection1'
import HomeSection2 from '../components/HomeSection2/homeSection2'
import HomeSection3 from '../components/HomeSection3/homeSection3'

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
  </Layout>
)

export default IndexPage
