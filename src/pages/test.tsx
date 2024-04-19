import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

interface Post {
  date: string
  id: string
  title: string
}

const TestPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const posts = data.allWpPost.nodes

  return (
    <>
      <Layout location={location} title="testosterone">
        <Seo title="test page" />
        <h1>Test Page</h1>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <article className="testArticle">
                  <header>
                    <h2>{post.title}</h2>
                    <small>{post.date}</small>
                  </header>
                </article>
              </li>
            )
          })}
        </ul>
        <p>This is a test page</p>
      </Layout>
    </>
  )
}

export default TestPage

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMMDD YYYY")
        id
        title
      }
    }
  }
`
