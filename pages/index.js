import Head from 'next/head'
import { Fragment, useEffect } from 'react'

import LandingHeader from '../components/LandingHeader'
import LandingTitle from '../components/LandingTitle'
import LandingAbout from '../components/LandingAbout'
import LandingProjects from '../components/LandingProjects'
import Footer from '../components/Footer'


export default function Home(/*{ json }*/) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("opacity-1");
          entry.target.classList.remove("opacity-0");
        }
      });
    });

    const targets = document.querySelectorAll(".js-show-on-scroll");

    targets.forEach((target) => {
      observer.observe(target);
    });
    
  });

  return (
    <Fragment>
      <Head>
        <title>Henry Herrmann Software Developer</title>
        <meta name="description" content="Henry Herrmann Software Developer producing reliable software including mobile apps, REST APIs and much more. Coding in JS, Dart and Java" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://herrmann.page" key="ogurl" />
        <meta property="og:image" content="https://herrmann.page/logo/logo.jpg" key="ogimage" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:site_name" content="Software Developer" key="ogsitename" />
        <meta property="og:title" content="Henry Herrmann" key="ogtitle" />
        <meta property="og:description" content="Producing reliable software products including mobile apps, REST APIs, etc." key="ogdesc" />
        <link href="/logo/logo.svg" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/logo/logo_white.svg" rel="icon" media="(prefers-color-scheme: dark)" />
      </Head>
      <LandingHeader />
      <div className='bg-light-white text-slate'>
        <LandingTitle />
        <LandingAbout />
        <LandingProjects /*json={json}*//>
      </div>
      <Footer />
    </Fragment>
  )
}

/*export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/henry-herrmann/repos");
  const json = await res.json();

  return { props: { json } }
}*/
