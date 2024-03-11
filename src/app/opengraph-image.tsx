import { useMemo } from 'react';
import { ImageResponse } from 'next/og';
import { Heading, Text, Flex } from '@lawallet/ui';

import { usePricesContext } from '@/context/PricesContext';

import { Progress } from './components/Progress';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = '1SAT = 1PESO';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  const { pricesData, convertCurrency } = usePricesContext();

  const valueSatInArs = useMemo(() => convertCurrency(1, 'SAT', 'ARS'), [pricesData]);

  // Font
  const interSemiBold = fetch(new URL('./Inter-SemiBold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading>1SAT = 1PESO</Heading>
        <Flex gap={8}>
          <Progress value={valueSatInArs * 100} />
          <Text isBold>${valueSatInArs}</Text>
        </Flex>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
