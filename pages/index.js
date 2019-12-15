import React from 'react'
import Head from 'next/head'
import Articles from '../components/articles'

const Home = () => (
  <>
    <Head>
      <title>CSS👨‍🚀Cursors</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/krg4phe.css"/>
    </Head>

    <section>
      <h1>
        Move your mouse over the code
      </h1>

      <Articles/>
    </section>

    <Footer/>

    <style jsx>{`

      section {
        height: auto;
        display:grid;
        grid-template-rows: auto 1fr;
        padding: 1rem;
        grid-row-gap: 1rem;
      }

      :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :global(h1,h2) {
        color: #334E68;
        font-family: jaf-facitweb, 'system-ui', sans-serif;
        font-weight: 700;
        font-style: normal;
      }
      
      :global(body) {
        font-family: jaf-facitweb, 'system-ui', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        font-style: normal;
        line-height: 1.25rem;
        color: #243B53;
        
      }
    `}</style>
  </>
);

const Footer = () => (
  <footer>
    Source:  
    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor'>
        https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
    </a>
    <style jsx>{`
      footer {
        font-size: 0.5rem;
        padding: 0 1rem;
        color: #627D98;
        background-color: #fff;
        
      }
      footer a {
        text-decoration: none;
        color: inherit;
      }

    `}</style>
  </footer>
)

export default Home
