import { appTheme } from '@/config';
import { Flex, Icon, Heading, Text } from '@lawallet/ui';
import { ArrowUp, ArrowDown } from '../Icons';
import { Card } from '../Card';

import { PricesPrimitive } from './style';
import { usePricesContext } from '@/context/PricesContext';

export function Prices() {
  const { convertCurrency } = usePricesContext();

  function formatNumber(number: any) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <PricesPrimitive>
      <Card>
        <Flex align="center" gap={8}>
          <Text isBold color={appTheme.colors.gray50}>
            Bitcoin
          </Text>
          {/* <Flex gap={4}>
            <Icon size="small" color={appTheme.colors.primary}>
              <ArrowUp />
            </Icon>
            <Text color={appTheme.colors.primary}>3.24%</Text>
          </Flex> */}
        </Flex>
        <Flex align="center" gap={4}>
          <Heading as="h2">${formatNumber(convertCurrency(100000000, 'SAT', 'USD').toFixed(0))}</Heading>
          <Text size="small" color={appTheme.colors.gray50}>
            USD
          </Text>
        </Flex>
      </Card>
      <Card>
        <Flex align="center" gap={8}>
          <Text isBold color={appTheme.colors.gray50}>
            Dólar cripto
          </Text>
          {/* <Flex gap={4} flex={0}>
            <Icon size="small" color={appTheme.colors.error}>
              <ArrowDown />
            </Icon>
            <Text color={appTheme.colors.error}>1.49%</Text>
          </Flex> */}
        </Flex>
        <Flex align="center" gap={4}>
          <Heading as="h2">${formatNumber(convertCurrency(1, 'USD', 'ARS').toFixed(0))}</Heading>
          <Text size="small" color={appTheme.colors.gray50}>
            ARS
          </Text>
        </Flex>
      </Card>
    </PricesPrimitive>
  );
}
