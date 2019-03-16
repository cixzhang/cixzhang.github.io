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
        <span>March 30, 2019 @ 10am</span>
        <br />
        <span>Schabarum Regional Park</span>
      </div>
      <object
        id="weddingsvg"
        data="/wedding/CindynPK.svg"
        type="image/svg+xml"
      />
      <button
        onClick={() => {
          window.location.hash = '';
          window.location.hash = '#rsvp';
        }}>
        RSVP
      </button>
    </div>
  );
}

export default Header;
