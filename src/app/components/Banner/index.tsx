/* eslint-disable @next/next/no-img-element */
import { styled } from 'styled-components';
import banner from '../../../../public/banner1.png';

interface BannerProps {
  href?: string;
}

const BannerPrimitive = styled.a`
  display: block;
  width: 100%;
  margin-top: 12px;
`;

const BannerImagePrimitive = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;

export function Banner(props: BannerProps) {
  return (
    <BannerPrimitive {...props} target="_blank" rel="noreferrer">
      <BannerImagePrimitive src={banner.src} alt="Banner" />
    </BannerPrimitive>
  );
}
