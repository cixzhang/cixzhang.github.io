import React from 'react'

import { rhythm } from '../utils/typography'
import Bio from '../components/Bio'
import BackLink from '../components/BackLink'


class Layout extends React.Component {
  render() {
    const { location, children, header: _header, footer: _footer } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const header = _header !== undefined ?
      _header :
      (location.pathname === rootPath ? <Bio /> : <BackLink />);

    const footer = _footer !== undefined ?
      _footer :
      <footer>
        © {new Date().getFullYear()}
      </footer>;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        {footer}
      </div>
    )
  }
}

export default Layout
