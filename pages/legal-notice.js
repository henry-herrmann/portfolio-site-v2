import Head from 'next/head'
import { Fragment} from 'react'

import LandingHeader from '../components/LandingHeader';
import BlockContent from '../components/block/BlockContent';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Henry Herrmann Software Developer</title>
                <meta name="description" content="Henry Herrmann Software Developer producing reliable software including mobile apps, REST APIs and much more. Coding in JS, Dart and Java" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/logo/logo.jpg" />
            </Head>
            <div className='min-h-screen bg-gradient-to-r from-gradient-1 2 to-gradient-2'>
                <LandingHeader />
                <div className="flex justify-center flex-col mb-14">
                    <div className='flex justify-center'>
                        <div className='mr-8 ml-8 text-center max-w-screen-md mt-36 sm:mt-40 ml:m-0 mr:m-0'>
                            <h1 className='font-bold text-5xl mb-4 mr-4 ml-4'>Legal Notice</h1>
                        </div>
                    </div>
                </div>
                <BlockContent>
                  <div>
                      <strong className='font-semibold text-2xl'>Entries referred to § 5 TMG</strong><br/>
                      <p className='font-light'>
                          Henry Herrmann<br/> 
                          Ludwig-Dürr-Weg 9<br/> 
                          45883 Gelsenkirchen<br/>
                          Germany
                          <br/><br/>
                      </p>
                      <p className='font-light'>
                          <strong className='font-semibold text-2xl'>Represented by:</strong><br/>
                          Henry Herrmann<br/><br/>
                      </p>
                      <p className='font-light'>
                          <strong className='font-semibold text-2xl'>Contact:</strong><br/>
                          Phone: +49 15678 712364<br/> 
                          E-Mail: <a href='mailto:henry@herrmann.page'>henry@herrmann.page</a><br/><br/>
                      </p>
                      {/* <p>
                          <strong>Umsatzsteuer-ID: </strong><br/>
                          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br/><br/>
                          <strong>Wirtschafts-ID: </strong><br/> 
                          Musterwirtschaftsid<br/> 
                      </p> */}
                      {/* <p>
                          <strong>Aufsichtsbehörde:</strong><br/>
                          Musteraufsicht Musterstadt<br/>
                      </p> */}
                      <p className='font-light'>
                          {/* <strong>Haftungsausschluss: </strong><br/><br/> */}
                          <strong className='font-semibold text-2xl'>Liability for links</strong>
                          <br/><br/>
                          Our offer contains links to external third-party websites, the content of which we have no influence on. Therefore we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete evidence of an infringement. As soon as we become aware of legal violations, we will remove such links immediately.
                          <br/><br/>
                          <strong className='font-semibold text-2xl'>Copyright</strong>
                          <br/><br/>
                          The content and works on these pages created by the site operators are subject to German copyright law. The duplication, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, we ask that you inform us accordingly. As soon as we become aware of legal violations, we will remove such content immediately.
                          <br/><br/>
                          <strong className='font-semibold text-2xl'>Data privacy</strong>
                          <br/><br/>
                          Our website can usually be used without providing any personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.<br/>
                          We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. A complete protection of the data against access by third parties is not possible.<br/>
                          The use of contact data published as part of the imprint obligation by third parties to send unsolicited advertising and information material is hereby expressly prohibited. The site operators expressly reserve the right to take legal action in the event of unsolicited advertising being sent, such as spam e-mails.<br/>
                          <br/>
                      </p>
                      <div className='flex justify-center'>
                          <button className='mr-8 ml-8 mt-10 text-gray-400 text-sm font-light rounded-md text-center'>Last Update: November 27th, 2022</button>
                      </div>
                  </div>
                </BlockContent>
                <Footer />
            </div>
        </Fragment>
    );
}