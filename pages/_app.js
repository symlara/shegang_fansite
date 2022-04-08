import React from 'react';
import { Layout } from '../components';
import { BrowserRouter, StaticRouter as Router, Route } from 'react-router-dom';



import '../styles/globals.scss'
import 'tailwindcss/tailwind.css';



// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
  
    <Layout>
      <Component {...pageProps} />
    </Layout>

   
    
  );
}

export default MyApp;