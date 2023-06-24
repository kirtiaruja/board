import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider, useSession } from "next-auth/react"
import './App.css';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import MenuItems from './components/menudataitems';

function App({
  Component,
  pageProps,
}) {

  return (
    <SessionProvider session={pageProps.session} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}


export default App;


// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }