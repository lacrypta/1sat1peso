'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { Divider, Flex, Heading, Text } from '@lawallet/ui';

import { appTheme } from '@/config';
import { usePricesContext } from '@/context/PricesContext';
import { getDecimalPart, roundToSingleDigit } from '@/utils';

import { Progress } from '../Progress';

import { Background, HeaderPrimitive } from './style';

export default function Header() {
  const { pricesData, convertCurrency } = usePricesContext();

  const valueSatInArs = useMemo(() => convertCurrency(1, 'SAT', 'ARS'), [pricesData]);

  const localArray: any = Array.from({ length: roundToSingleDigit(valueSatInArs) }, (v, i) => i);

  return (
    <HeaderPrimitive>
      <Background>
        <Image src='/map.webp' alt='map' width={2103} height={1248} />
      </Background>
      <Heading align='center'>1SAT = 1PESO</Heading>
      <Flex gap={8} align='center' justify='center'>
        {localArray.map((element: any, index: any) => {
          const isLastElement = index + 1 === localArray.length;
          return (
            <>
              <Progress
                key={index}
                value={isLastElement ? valueSatInArs * 100 : 100}
              />
              {isLastElement ? (
                <Text isBold>${String(valueSatInArs).replace('.', ',')}</Text>
              ) : (
                <Text size='small' color={appTheme.colors.primary}>
                  ${index + 1}
                </Text>
              )}
            </>
          );
        })}
      </Flex>
      <Divider y={12} />
      <Text align='center' color={appTheme.colors.gray50}>
        1 BTC = 100.000.000 SAT
      </Text>
      <Divider y={16} />
    </HeaderPrimitive>
  );
}
