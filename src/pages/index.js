import * as React from 'react'
import Layout from '../component/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () =>
{
  return (
    <Layout pageTitle="Home Page">
      <p>this is the base</p>
      <StaticImage alt="ecchi" src="../images/goose.jpg" />
    </Layout>
  )
}

export default IndexPage