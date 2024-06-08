'use client';

import { Container, Flex } from '@lawallet/ui';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Prices } from '@/app/components/Prices';
import { PricesProvider } from '@/context/PricesContext';

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
        </Container>
      </Flex>
      <Footer />
    </PricesProvider>
  );
}
