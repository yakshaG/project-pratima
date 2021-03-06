import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button, Card, Row, Portion, Text, HRule, Heading, Element } from 'fictoan-react'
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import imageUrlPrefix from '../constants/imageUrlPrefix'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project pratima</title>
        <meta name="description" content="Payment icons for India" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        <Nav />

        <Row sidePadding="huge">
          <Portion desktopSpan='22'>
            <Heading as="h3">Project Pratima</Heading>
            <Text size='large'>
              An icon library that can be used by all financial institutions in India. These set of icons will be easily recognisable by every India irrespective of literacy and education level.
            </Text>
          </Portion>
          <Portion desktopSpan='1'></Portion>
        </Row>

        <HRule sideMargin="huge" />

        <Row sidePadding='huge'>
          <Portion desktopSpan='24'>
            <Heading as="h6">Icons</Heading>
          </Portion>
        </Row>

        <Row sidePadding='huge'>
          <Portion desktopSpan='6' tabletLandscapeSpan='6' tabletPortraitSpan='6' mobileSpan='12' >
            <Element as="img" src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_send_money_24_s1_r3_soft.svg`} className="icon-huge">
            </Element>
            <Text size="medium">Send money</Text>
          </Portion>
          <Portion desktopSpan='6' tabletLandscapeSpan='6' tabletPortraitSpan='6' mobileSpan='12'>
            <Element as="img" src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_bank_transfer_24_s1_r3_soft.svg`} className="icon-huge">
            </Element>
            <Text size="medium">Bank transfer</Text>
          </Portion>
          <Portion desktopSpan='6' tabletLandscapeSpan='6' tabletPortraitSpan='6' mobileSpan='12'>
            <Element as="img" src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_self_transfer_24_s1_r3_soft.svg`} className="icon-huge">
            </Element>
            <Text size="medium">Self transfer</Text>
          </Portion>
          <Portion desktopSpan='6' tabletLandscapeSpan='6' tabletPortraitSpan='6' mobileSpan='12'>
            <Element as="img" src={`${imageUrlPrefix}/icons/s1_r3_soft/ic_view_transaction_history_24_s1_r3_soft.svg`} className="icon-huge">
            </Element>
            <Text size="medium">Transaction history</Text>
          </Portion>
        </Row>
        <Row sidePadding="huge">
          <Portion desktopSpan='6'>
            <Link href="icons">
              <Button kind="primary" shadow="hard" marginBottom='small'>Go to icon library</Button>
            </Link>
          </Portion>
        </Row>
        <Footer />
      </main>

    </div>
  )
}
