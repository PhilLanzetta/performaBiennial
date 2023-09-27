import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Artists = ({ data }) => {
  const artists = data.allContentfulArtist.nodes
  return (
    <Layout>
      <h1 className='page-heading artists-header'>2023 Artists</h1>
      <div className='artists-container'>
        {artists.map((artist) => (
          <Link
            key={artist.id}
            to={`/${
              artist.performance?.length ? artist.performance[0].slug : ''
            }`}
            className='artist-item'
          >
            <GatsbyImage
              image={artist.artistImage?.image.gatsbyImageData}
              alt={artist.artistImage?.image.description}
              className='artist-item-image'
            ></GatsbyImage>
            <p className='artist-item-name'>{artist.name}</p>
            {artist.performance && (
              <p className='artist-item-title'>
                {artist.performance[0]?.title}
              </p>
            )}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulArtist(sort: { name: ASC }) {
      nodes {
        id
        artistImage {
          image {
            description
            gatsbyImageData
          }
        }
        name
        performance {
          title
          slug
        }
      }
    }
  }
`

export default Artists
