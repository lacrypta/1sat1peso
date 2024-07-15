'use client';

import { useRouter } from 'next/navigation';
import { Container, Flex, Button, ArrowRightIcon } from '@lawallet/ui';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Prices } from '@/app/components/Prices';
import { PricesProvider } from '@/context/PricesContext';

export default function Home() {
  const router = useRouter();

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
          <Flex>
            <Button onClick={() => router.push('https://forms.gle/7J88nXtmZfJYUiRz8')} variant="borderless">
              Festejá el suceso con nosotros
              <ArrowRightIcon />
            </Button>
          </Flex>
        </Container>
      </Flex>
      <Footer />
    </PricesProvider>
  );
}
