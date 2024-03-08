import path from 'path'
import chunk from 'lodash/chunk'
import { GatsbyNode } from 'gatsby'

interface Post {
  id: string
  uri: string
}

type PostEdge = {
  previous: Post | null
  post: Post
  next: Post | null
}

type GatsbyUtilities = {
  actions: {
    createPage: (page: {
      path: string
      component: string
      context: {
        offset?: number | undefined
        postsPerPage?: number | undefined
        nextPagePath?: string | null
        previousPagePath?: string | null | undefined
        id?: string
        previousPostId?: string | null
        nextPostId?: string | null
      }
    }) => void
  }
  graphql: (query: string) => Promise<any>
  reporter: {
    panicOnBuild: (message: string, error?: Error) => void
  }
}

export const createPages: GatsbyNode['createPages'] = async (gatsbyUtilities: GatsbyUtilities) => {
  const posts = await getPosts(gatsbyUtilities)

  if (!posts.length) {
    return
  }

  await createIndividualBlogPostPages({ posts, gatsbyUtilities })
  await createBlogPostArchive({ posts, gatsbyUtilities })
}

async function createIndividualBlogPostPages({
  posts,
  gatsbyUtilities,
}: {
  posts: PostEdge[]
  gatsbyUtilities: GatsbyUtilities
}) {
  await Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )
}

async function createBlogPostArchive({
  posts,
  gatsbyUtilities,
}: {
  posts: PostEdge[]
  gatsbyUtilities: GatsbyUtilities
}) {
  const graphqlResult = await gatsbyUtilities.graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = (page: number) => {
        if (page > 0 && page <= totalPages) {
          return page === 1 ? `/` : `/blog/${page}`
        }

        return null
      }

      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber) ?? '',
        component: path.resolve(`./src/templates/blog-post-archive.tsx`),
        context: {
          offset: index * postsPerPage,
          postsPerPage,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

async function getPosts(gatsbyUtilities: GatsbyUtilities): Promise<PostEdge[]> {
  const graphqlResult = await gatsbyUtilities.graphql(`
    query WpPosts {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    gatsbyUtilities.reporter.panicOnBuild(`There was an error loading your blog posts`, graphqlResult.errors)
    return []
  }

  return graphqlResult.data.allWpPost.edges
}
