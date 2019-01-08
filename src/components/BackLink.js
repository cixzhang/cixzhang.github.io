import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

function BackLink() {
  return (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          {`‹`}
          <StaticQuery
            query={backLinkQuery}
            render={data => {
              const { author } = data.site.siteMetadata
              return (
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginLeft: rhythm(1 / 4),
                    marginBottom: 0,
                    minWidth: 20,
                    borderRadius: `100%`,
                  }}
                />
              )
            }}
          />
        </div>
      </Link>
    </h3>
  )
}

const backLinkQuery = graphql`
  query BackLinkQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default BackLink
