'use client';
import { UseConverterReturns, useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { ReactNode, createContext, useContext } from 'react';

const PricesContext = createContext({} as UseConverterReturns);

export function PricesProvider({ children }: { children: ReactNode }) {
  const converter = useCurrencyConverter();
  return <PricesContext.Provider value={converter}>{children}</PricesContext.Provider>;
}

export const usePricesContext = () => {
  const context = useContext(PricesContext);
  if (!context) {
    throw new Error('usePricesContext must be used within PricesProvider');
  }

  return context;
};
