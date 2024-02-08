import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Tactics Coordinator</title>
        <meta property="og:title" content="Internal Tactics Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
