import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} header={
        <div>
          Cindy + PK
        </div>
      }>
        <SEO
          title="Cindy + PK's Wedding"
          keywords={[`wedding`]}
          hideSiteTitle
        />
      </Layout>
    )
  }
}

export default BlogIndex
