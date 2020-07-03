import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/index";
import SEO from "../components/seo";
import Gallery from '../components/gallery';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Gallery/>
  </Layout>
)

export default PortfolioPage;
