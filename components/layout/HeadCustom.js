import React from 'react'
import Head from 'next/head'

function HeadCustom({title, children}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Description page SEO" />
        <link rel="icon" href="/favicon.ico" />
        {children}
    </Head>
  )
}

export default HeadCustom