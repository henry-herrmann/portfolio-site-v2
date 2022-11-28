import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import LandingHeader from '../LandingHeader';
import Footer from '../Footer';

export default function BlockHeading(props) {
    return (
       <div className='flex justify-center flex-col'>
            <div className='flex justify-center bg-white  text-rjks-gray-dark'>
                <div className='max-w-2xl text-justify ml-6 mr-6 sm:ml-10 sm:mr-10 p-10'>
                    {props.children}
                </div>
            </div>
       </div>
    );
}