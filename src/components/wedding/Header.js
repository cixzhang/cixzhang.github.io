import React from 'react';
import { rhythm } from '../../utils/typography'


function Header() {
  return (
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
        <span>Schabarum Regional Park<br />17250 E Colima Rd, Rowland Heights, California</span>
      </div>
      <object
        id="weddingsvg"
        data="/wedding/CindynPK.svg"
        type="image/svg+xml"
      />
    </div>
  );
}

export default Header;
