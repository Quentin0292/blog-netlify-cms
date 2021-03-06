import React from 'react';
import { rhythm, scale } from '../utils/typography';
import { Link } from 'gatsby';
import '../utils/global.css'



class Layout extends React.Component {

  renderHeader(){
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname === rootPath){
      return (
        <h1
          style={{
            ...scale(3),
            fontFamily: 'Permanent Marker, sans-serif',
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#ffffff',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      return (
        <h3
          style={{
            fontFamily: 'Permanent Marker, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(2),
            marginLeft: 'auto',
            marginRight: 'auto',
            height: 42, // because
            lineHeight: '2.625rem',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textLink)',
              ...scale(2.3),
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      );
    }
  }

  render(){
    const { children } = this.props;
    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(30),
            padding: `2.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.625rem',
            }}
          >
            {this.renderHeader()}
          </header>
          {children}
        </div>
      </div>
    )
  }
}


export default Layout
