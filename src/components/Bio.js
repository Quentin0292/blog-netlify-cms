import React from 'react';
import profilePic from '../assets/profilePic.png';
import { rhythm, scale } from '../utils/typography';
import '../utils/global.css'
import '../utils/typography';


class Bio extends React.Component {
  render(){
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
          ...scale(0.3)
        }}
      >
        <img
          src={profilePic}
          alt={`Quentin Lecocq`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
            ...scale(0.3)
          }}
        />
        <p style={{
          maxWidth: 310,
          fontFamily: 'Work sans, sans-serif'
        }}>
          Personal blog by{' '}
          <a href="https://mobile.twitter.com/quentinlecocq1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'var(--textLink)',
            }}
          > Quentin Lecocq</a>
        </p>
      </div>
    )
  }
}

export default Bio
