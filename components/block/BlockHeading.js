import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'

export default function BlockHeading({title}) {
  return (
    <Fragment>
      <div className='flex justify-center flex-col'>
        <div className='translate-y-44 h-64 mr-8 ml-8 text-center mb-10  ml:m-0 mr:m-0'>
            <h1 className=' font-bold text-5xl mb-4 mr-4 ml-4'>{title}</h1>
        </div>
      </div>
    </Fragment>
  );
}