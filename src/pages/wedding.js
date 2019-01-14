import React from 'react'

import styles from "../components/wedding/wedding.css"
import SEO from '../components/seo'

import RSVPForm from '../components/wedding/RSVPForm'
import { rhythm } from '../utils/typography'

class Wedding extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        }}
      >
        <SEO
          title="Cindy + PK's Wedding"
          keywords={[`wedding`]}
          hideSiteTitle
        />
        <div
          style={{
            display: `flex`,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            minHeight: `100vh`,
            maxWidth: rhythm(24),
            textAlign: 'center'
          }}
        >
          <div>
            <h1>Cindy + PK</h1>
            <span>March 30, 2019</span>
            <br />
            <span>Schabarum Regional Park<br />Rowland Heights, California</span>
          </div>
          <object
            id="weddingsvg"
            data="/wedding/CindynPK.svg"
            type="image/svg+xml"
            onLoad={this._onLoadSVG} />
        </div>
        <RSVPForm />
      </div>
    )
  }
}

export default Wedding
