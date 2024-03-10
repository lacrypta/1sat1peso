'use client';

import { styled } from 'styled-components';

export const HeaderPrimitive = styled.div`
  h1 {
    font-size: 48px;

    background: -webkit-linear-gradient(${(props) => props.theme.colors.text}, ${(props) => props.theme.colors.gray25});
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  top: -15%;
  left: 0;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 120%;
    max-width: 1200px;
    height: auto;
  }
`;
