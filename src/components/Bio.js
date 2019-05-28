import React from 'react';
import profilePic from '../assets/profilePic2.jpg';
import { rhythm, scale } from '../utils/typography';
import '../utils/global.css'
import '../utils/typography';
import { StaticQuery, graphql } from 'gatsby'
import { List, Avatar, Card } from 'antd'

const { Meta } = Card;


const Bio = () => (
  <StaticQuery
    query={
      graphql`
        query {
          site {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      `
    }
    render={data => (
      <>
        <List.Item style={{
          marginBottom: rhythm(1.5),
        }}>
          <List.Item.Meta
            avatar={
              <Avatar
                size={64}
                src={profilePic}
              />
            }
            title={<a href="https://mobile.twitter.com/quentinlecocq1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--textLink)',
                fontSize: rhythm(1.1),
              }}
              >{data.site.siteMetadata.author}</a>}
            description={data.site.siteMetadata.description}
          />
        </List.Item>
      </>
    )}
  />
)

export default Bio
