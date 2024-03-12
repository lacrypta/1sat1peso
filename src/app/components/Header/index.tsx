'use client';

import { Divider, Flex, Heading, Text } from '@lawallet/ui';
import Image from 'next/image';

import { appTheme } from '@/config';

import { Progress } from '../Progress';

import { usePricesContext } from '@/context/PricesContext';
import { useMemo } from 'react';
import { Background, HeaderPrimitive } from './style';

export default function Header() {
  const { pricesData, convertCurrency } = usePricesContext();

  const valueSatInArs = useMemo(() => convertCurrency(1, 'SAT', 'ARS'), [pricesData]);

  return (
    <HeaderPrimitive>
      <Background>
        <Image src='/map.webp' alt='map' width={2103} height={1248} />
      </Background>
      <Heading align='center'>1SAT = 1PESO</Heading>
      <Flex gap={8}>
        <Progress value={valueSatInArs * 100} />
        <Text isBold>${String(valueSatInArs).replace('.', ',')}</Text>
      </Flex>
      <Divider y={12} />
      <Text align='center' color={appTheme.colors.gray50}>
        1 BTC = 100.000.000 SAT
      </Text>
      <Divider y={16} />
    </HeaderPrimitive>
  );
}
