import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    projects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 50vw;

  /* 1200px - 2 projects per row */
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 60vw;
  }
  /* 1000px - 1 project per row */
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Index: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#F5F5F5">
      <SEO title="Home | Faye + Walker Architecture" />
      <Area style={pageAnimation}>
        {projects.nodes.map(project => (
          <GridItem id="img-border" key={project.slug} to={project.slug} aria-label={`View project "${project.title}"`}>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.title_detail}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    projects: allProjectsYaml {
      nodes {
        title
        title_detail
        slug
        cover {
          childImageSharp {
            fluid(quality: 85, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
