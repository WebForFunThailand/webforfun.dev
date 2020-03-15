import { useStaticQuery, graphql } from "gatsby"

export function useSponsersImages() {
  const query = graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `

  const result = useStaticQuery(query)
  const { allFile } = result
  const { edges } = allFile

  const files = {}

  edges.forEach(image => {
    files[image.node.name] = {
      id: image.node.id,
      name: image.node.name,
      source: image.node.childImageSharp.fluid,
    }
  })

  return files
}
