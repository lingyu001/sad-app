'use client';

import useSWR from 'swr';
import { getStockData, getStockAnalysis } from '../lib/api';

// Custom fetcher for useSWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useStockData(symbol: string | null) {
  const { data, error, isLoading } = useSWR(
    symbol ? `/api/stocks?symbol=${symbol}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return {
    stock: data?.data,
    isLoading,
    isError: error,
  };
}

export function useStockAnalysis(symbol: string | null, analysisTypes: string[]) {
  const { data, error, isLoading, mutate } = useSWR(
    symbol && analysisTypes.length > 0 
      ? [`/api/analysis`, symbol, analysisTypes.join(',')] 
      : null,
    // Custom fetcher for analysis
    async ([url, symbol, types]: [string, string, string]) => {
      const response = await fetch(`${url}?symbol=${symbol}&types=${types}`);
      if (!response.ok) {
        throw new Error('Failed to fetch analysis data');
      }
      const json = await response.json();
      return json.data; // Return the data property from the response
    },
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return {
    analysis: data,
    isLoading,
    isError: error,
    refreshAnalysis: mutate,
  };
} 