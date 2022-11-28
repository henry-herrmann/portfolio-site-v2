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
        <title>Henry Herrmann</title>
        <meta name="description" content="herrmann.page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className='min-h-screen bg-gradient-to-r from-gray-100 to-blue-200'>
        <LandingHeader />
        <LandingTitle />
        <LandingAbout />
        <LandingProjects json={json}/>
        <Footer />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/henry-herrmann/repos");
  const json = await res.json();

  return { props: { json } }
}
