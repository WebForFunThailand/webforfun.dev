import { useStaticQuery, graphql } from "gatsby"

export function useGallerysImages() {
  const query = graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallerys" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1280) {
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

  const files = edges.map(image => {
    return {
      id: image.node.id,
      name: image.node.name,
      source: image.node.childImageSharp.fluid,
    }
  })

  return files
}
