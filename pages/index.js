import Head from 'next/head'
import { Fragment } from 'react'

import LandingHeader from '../components/LandingHeader'
import LandingTitle from '../components/LandingTitle'
import LandingAbout from '../components/LandingAbout'
import LandingProjects from '../components/LandingProjects'
import Footer from '../components/Footer'

export default function Home({ json }) {
  return (
    <Fragment>
      <Head>
        <title>Henry Herrmann Software Developer</title>
        <meta name="description" content="Henry Herrmann Software Developer producing reliable software including mobile apps, REST APIs and much more. Coding in JS, Dart and Java" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo/logo.jpg" />
      </Head>
      <div className='min-h-screen bg-gradient-to-r from-gradient-1 to-gradient-2'>
        <LandingHeader />
        <LandingTitle />
        <LandingAbout />
        <LandingProjects json={json}/>
        <Footer />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/henry-herrmann/repos");
  const json = await res.json();

  return { props: { json } }
}
