import React from 'react';
import Head from 'next/head';
import Hero from '@/components/home/hero/page';


export default function Home() {
  return (
    <div className="min-h-screen">
        <Head>
          <title>Endurancer</title>
          <meta name="description" content="Cognitive and comprehensive Power." />
        </Head>
      <main>
        <Hero />
      </main>
    </div>

    
  )
}