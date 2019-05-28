import React from 'react';
import profilePic from '../assets/profilePic2.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
          fontFamily: 'Quattrocento Sans, sans-serif',
        }}
      >
        <img
          src={profilePic}
          alt={`Quentin Lecocq`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2.5),
            height: rhythm(2.5),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Blog personnel de{' '}
          <a
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
              color: 'var(--textLink)',
              fontWeight: 'bold',
            }}
            href="https://mobile.twitter.com/quentinlecocq1">Quentin Lecocq</a>.
        </p>
      </div>
    );
  }
}

export default Bio;
