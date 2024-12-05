/* eslint-disable @next/next/no-img-element */
'use client';

import { Container, Flex } from '@lawallet/ui';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Prices } from '@/app/components/Prices';
import { PricesProvider } from '@/context/PricesContext';
// import { Banner } from './components/Banner';

export default function Home() {
  return (
    <PricesProvider>
      <div>
        {/* <GitHubCorners
          position='right'
          bgColor={appTheme.colors.white}
          color={appTheme.colors.background}
          href='https://github.com/uiwjs/react-github-corners'
        /> */}
      </div>
      <Flex flex={1} align="center">
        <Container size="small">
          <Header />
          <Prices />
          {/* <Flex>
              <Banner href={'https://fiesta.1satoshi1peso.ar/'} />
            </Flex> */}
        </Container>
      </Flex>
      <Footer />
    </PricesProvider>
  );
}
