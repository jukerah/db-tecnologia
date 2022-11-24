import { useState, useContext, FormEvent } from 'react';
import Head from "next/head";
import Link from 'next/link';
import * as C from "./styles";

import { canSSRAuth } from "../../utils/canSSRAuth";

import Header from "../../components/Header";

export default function AdminPanel() {
  return (
    <C.AdminPanel>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>DB Tecnologia - Login</title>
        <meta name="description" content="Acesse sua conta." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />

        <h1>Admin Panel</h1>
      </>
    </C.AdminPanel>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => { 
  return {
    props: {}
  }
})
