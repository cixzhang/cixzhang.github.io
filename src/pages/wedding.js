import React from 'react'

import RSVPForm from '../components/wedding/RSVPForm'
import Layout from '../components/wedding/Layout'

class Wedding extends React.Component {
  render() {
    return (
      <Layout>
        <RSVPForm />
      </Layout>
    )
  }
}

export default Wedding
