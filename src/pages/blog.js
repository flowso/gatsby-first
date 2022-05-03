import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/layout'

const BlogPage = ({ data }) =>
{
    return (
        <Layout PageTitle="Blog Post">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.id}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
            <p>something to show here</p>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default BlogPage