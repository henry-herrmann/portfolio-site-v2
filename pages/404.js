import Head from 'next/head'
import { Fragment} from 'react'

import LandingHeader from '../components/LandingHeader';
import BlockContent from '../components/block/BlockContent';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function FourHundredFour(){
    return (
        <Fragment>
            <Head>
                <title>Henry Herrmann Software Developer</title>
                <meta name="description" content="Henry Herrmann Software Developer producing reliable software including mobile apps, REST APIs and much more. Coding in JS, Dart and Java" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/logo/logo.jpg" />
            </Head>
            <div className='min-h-screen'>
                <LandingHeader />
                <div className="flex justify-center flex-col bg-herrmann-gray-light">
                    <div className='flex justify-center'>
                        <div className='mr-8 ml-8 text-center max-w-screen-md mt-44 sm:mt-40 ml:m-0 mr:m-0 mb-[43vh] md:mb-[54.8vh]'>
                            <div className='font-bold text-5xl mb-4 mr-4 ml-4'>Page not found! :(</div>
                            <p>Please check your URL and go back to the home page.</p>
                            <Link href="app://campus_app/event/13860">Campus App</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}