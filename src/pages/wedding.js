import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import Header from '../components/wedding/Header'
import RSVPForm from '../components/wedding/RSVPForm'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} header={<Header />}>
        <SEO
          title="Cindy + PK's Wedding"
          keywords={[`wedding`]}
          hideSiteTitle
        />
        <RSVPForm />
      </Layout>
    )
  }
}

export default BlogIndex
