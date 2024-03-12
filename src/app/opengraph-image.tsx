import { ImageResponse } from 'next/og';

import { roundToDown, decimalsToUse } from '@/utils';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const contentType = 'image/png';
export const alt = '1SAT = 1PESO';
export const size = {
  width: 1200,
  height: 630,
};

// ENV
const ENDPOINT_PRICE_BTC: string = 'https://api.yadio.io/exrates/btc';

// Image generation
export default async function Image() {
  // Font
  const blatantBoldFont = fetch(new URL('../styles/fonts/Blatant-Bold.woff', import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );

  // Get prices
  const fetchData = await fetch(ENDPOINT_PRICE_BTC)
    .then((res) => res.json())
    .then((pricesResponse) => {
      const BTCPrices = pricesResponse.BTC;
      if (!BTCPrices) return false;

      const updatedPrices = {
        ARS: BTCPrices.ARS / 10 ** 8,
        USD: BTCPrices.USD / 10 ** 8,
        SAT: 1,
        loading: false,
      };

      return updatedPrices;
    });

  const convertCurrency = (): number => {
    let convertedAmount: number = 0;
    if (!fetchData) return convertedAmount;

    const multiplier: number = Number(fetchData.ARS) / Number(fetchData.SAT);
    convertedAmount = 1 * multiplier;

    return Number(roundToDown(convertedAmount, 8).toFixed(decimalsToUse('ARS')));
  };

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(45deg, #101010, #333333)',
        }}
      >
        <div
          style={{
            color: '#808080',
            fontSize: '40px',
          }}
        >
          1 BTC = 100.000.000 SAT
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(45deg, #808080, #fff)',
            backgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Blatant',
            fontSize: '120px',
            fontWeight: 'bold',
            lineHeight: '120px',
          }}
        >
          1 SAT = 1 PESO
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '70%',
              height: '16px',
              backgroundColor: '#4D4D4D',
              borderRadius: '50px',
            }}
          >
            <div
              style={{
                width: `${convertCurrency() * 100}%`,
                height: '17px',
                backgroundColor: '#C2F76C',
              }}
            ></div>
          </div>
          <p
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '48px',
            }}
          >
            ${convertCurrency()}
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#808080',
            fontSize: '32px',
          }}
        >
          <p>made with</p>
          <svg width='33' height='31' viewBox='0 0 33 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M29.072 16.2676C27.5843 21.8198 23.6912 23.1677 19.6262 22.0785C15.5612 20.9893 12.8636 17.8754 14.3513 12.3232C15.839 6.77102 20.9487 0.882984 25.0137 1.9722C29.0787 3.06141 30.5597 10.7154 29.072 16.2676Z'
              fill='url(#paint0_linear_849_2340)'
            />
            <g filter='url(#filter0_d_849_2340)'>
              <path
                d='M18.0227 12.6945C19.5104 18.2467 16.8128 21.3606 12.7478 22.4498C8.68281 23.539 4.78971 22.1911 3.302 16.6389C1.81429 11.0867 3.29534 3.43269 7.36035 2.34347C11.4254 1.25426 16.535 7.1423 18.0227 12.6945Z'
                fill='url(#paint1_linear_849_2340)'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_849_2340'
                x='0.736328'
                y='2.21216'
                width='23.7002'
                height='28.585'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dx='2' dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 0.109804 0 0 0 0 0.109804 0 0 0 0 0.109804 0 0 0 0.65 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_849_2340' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_849_2340' result='shape' />
              </filter>
              <linearGradient
                id='paint0_linear_849_2340'
                x1='25.0137'
                y1='1.9722'
                x2='19.6262'
                y2='22.0785'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='white' />
                <stop offset='0.175' stop-color='#F2EFEA' />
                <stop offset='1' stop-color='#BDB7AF' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_849_2340'
                x1='7.36035'
                y1='2.34347'
                x2='12.7478'
                y2='22.4498'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='white' />
                <stop offset='0.175' stop-color='#F2EFEA' />
                <stop offset='1' stop-color='#BDB7AF' />
              </linearGradient>
            </defs>
          </svg>
          <p>by</p>
          <svg width='129' height='31' viewBox='0 0 129 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_849_2347)'>
              <path
                d='M25.0707 17.6752V15.1125H15.7505V12.5498H25.0689C25.0655 5.73362 19.5393 0.210938 12.7215 0.210938C5.90188 0.210938 0.374023 5.7388 0.374023 12.5584V27.9245H25.0707V25.3618H5.49951V22.799H25.0707V20.2363H10.6233V17.6735H25.0707V17.6752Z'
                fill='white'
              />
              <path d='M37.6131 10.2393H35.3232V25.3619H37.6131V10.2393Z' fill='white' />
              <path
                d='M40.3846 14.9034C41.4294 14.4234 43.0786 13.8345 44.8884 13.8345C49.3197 13.8345 50.5596 15.8981 50.5596 19.0325V25.3599H48.0262V24.4826C46.8985 25.2287 45.1681 25.5723 43.4447 25.5723C40.2603 25.5723 39.1084 23.8851 39.1084 22.1928C39.1084 20.5004 40.6713 18.3849 43.7417 18.3866C45.4669 18.3866 46.8519 18.7925 48.0262 19.4953V19.0342C48.0262 16.8928 47.7033 15.9137 45.0697 15.9137C42.4362 15.9137 40.3863 17.2244 40.3863 17.2244V14.9069L40.3846 14.9034ZM47.9088 21.9717C46.9296 21.2084 45.6033 20.4969 44.0767 20.4969C42.3153 20.4969 41.6418 21.3846 41.6418 22.191C41.6418 23.2807 43.0233 23.6382 44.391 23.4655C46.1698 23.241 46.9279 22.6987 47.907 21.9354V21.97L47.9088 21.9717Z'
                fill='white'
              />
              <path
                d='M67.3093 21.1601C66.9035 21.9925 66.0469 22.9855 64.2838 22.9855C61.854 22.9855 60.9923 21.0323 60.9923 19.359C60.9923 17.6856 61.854 15.7324 64.2838 15.7324C66.0487 15.7324 66.9035 16.7237 67.3093 17.5561L67.4371 17.8185L69.9135 16.3628L69.7805 16.1296C69.0207 14.8016 67.4509 13.2163 64.282 13.2163C59.9181 13.2163 57.9287 16.399 57.9287 19.3572C57.9287 22.3154 59.9164 25.4981 64.282 25.4981C67.4509 25.4981 69.0207 23.9146 69.7805 22.5848L69.9135 22.3517L67.4371 20.8959L67.3093 21.1584V21.1601Z'
                fill='white'
              />
              <path
                d='M77.258 13.218C75.7935 13.218 74.5415 14.173 73.7385 14.9916V13.4287H70.6611V25.2857H73.7385V17.8099C74.6779 16.7876 75.911 16.1313 76.9022 16.1313C78.6136 16.1313 79.4615 17.2918 79.496 17.3402L79.7343 17.6752L81.2713 15.1539V15.0779C81.2713 14.8465 79.6463 13.218 77.258 13.218Z'
                fill='white'
              />
              <path
                d='M90.5622 20.3571C89.7954 21.4641 88.3586 22.723 86.7474 22.723C84.8685 22.723 84.7131 20.7785 84.7131 18.6129V13.4287H81.6357V18.6129C81.6357 23.3101 83.0725 25.4964 86.1603 25.4964C87.844 25.4964 89.4863 24.5518 90.5622 23.4811V25.0129C90.5622 26.163 90.0735 27.5359 87.749 27.5394H87.7387C85.2208 27.5394 83.8669 26.1388 83.8548 26.125L83.6511 25.9092L81.7704 28.035L81.9293 28.2146C82.0001 28.2958 83.7305 30.2075 87.8095 30.2075C92.6293 30.2075 93.6413 27.3822 93.6413 25.0129V13.427H90.5639V20.3537L90.5622 20.3571Z'
                fill='white'
              />
              <path
                d='M102.665 13.218C101.074 13.218 99.3889 13.8967 98.2629 14.9536V13.4304H95.1855V30.0883H98.2629V23.5692C98.9986 24.4102 100.257 25.4981 101.864 25.4981C105.048 25.4981 107.188 22.3223 107.188 19.3572C107.188 16.3921 106.003 13.2163 102.663 13.2163L102.665 13.218ZM104.157 19.359C104.157 21.0392 103.4 22.837 101.278 22.837C99.9795 22.837 98.9278 21.5228 98.2629 20.3934V17.9273C99.1212 16.665 100.575 15.8844 102.078 15.8844C103.953 15.8844 104.155 18.3159 104.155 19.3607L104.157 19.359Z'
                fill='white'
              />
              <path
                d='M112.239 9.27734L109.161 10.2479V13.4289H107.291V15.9398H109.161V20.6646C109.161 23.0409 109.161 25.4983 112.126 25.4983C113.368 25.4983 114.886 24.3827 114.95 24.3343L115.081 24.2376L114.781 22.2879L114.444 22.4641C114.435 22.4693 113.532 22.9373 112.845 22.939C112.764 22.9459 112.484 22.939 112.341 22.2862C112.237 21.8148 112.237 21.2034 112.237 20.6646V15.9398H115.428V13.4289H112.237V9.27734H112.239Z'
                fill='white'
              />
              <path
                d='M122.191 13.2889C120.341 13.2889 118.659 13.8829 117.573 14.382L117.416 14.4545V17.4421L117.834 17.1744C117.853 17.1623 119.844 15.9069 122.37 15.9069C124.897 15.9069 125.057 16.7323 125.057 18.7563C123.873 18.1398 122.553 17.8393 121.044 17.8393H121.042C119.184 17.8393 118.03 18.5698 117.388 19.1811C116.606 19.9288 116.138 20.9512 116.138 21.9148C116.138 23.6797 117.348 25.5655 120.745 25.5655C122.432 25.5655 123.969 25.246 125.055 24.6779V25.3531H128.131V18.7545C128.131 14.9726 126.299 13.2854 122.189 13.2854L122.191 13.2889ZM124.739 21.6834C123.892 22.3224 123.175 22.7316 121.66 22.9233C120.731 23.0408 119.899 22.8922 119.493 22.5348C119.307 22.369 119.215 22.1687 119.215 21.9183C119.215 21.262 119.781 20.4953 121.379 20.4953C122.501 20.4953 123.631 20.8942 124.739 21.6851V21.6834Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_849_2347'>
                <rect width='127.759' height='30' fill='white' transform='translate(0.374023 0.210938)' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: 'Blatant',
          data: await blatantBoldFont,
          weight: 700,
        },
      ],
    },
  );
}
