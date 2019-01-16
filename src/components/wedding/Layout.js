import React from 'react';
import styles from "./wedding.css"
import SEO from '../../components/seo'

import { rhythm } from '../../utils/typography'
import Header from "./Header"

function Layout({children}) {
  document.body.classList.add('wedding');
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
      <Header />
      {children}
    </div>
  )
}

export default Layout;
