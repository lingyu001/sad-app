import { useState, useEffect } from 'react';

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  peRatio: number;
  dividend: number;
  high52Week: number;
  low52Week: number;
}

interface ApiResponse {
  success: boolean;
  data?: StockData;
  error?: string;
}

export default function useStockData(symbol: string) {
  const [data, setData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) return;

    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // In a real app, this would be an API call
        // const response = await fetch(`/api/stocks/${symbol}`);
        // const json = await response.json();
        
        // For now, we'll simulate an API response with mock data
        await new Promise(resolve => setTimeout(resolve, 600));
        
        const mockData: ApiResponse = {
          success: true,
          data: {
            symbol,
            price: randomPrice(),
            change: randomChange(),
            changePercent: randomChangePercent(),
            volume: randomVolume(),
            marketCap: randomMarketCap(),
            peRatio: randomPeRatio(),
            dividend: randomDividend(),
            high52Week: randomHigh(),
            low52Week: randomLow()
          }
        };
        
        if (mockData.success && mockData.data) {
          setData(mockData.data);
        } else {
          setError(mockData.error || 'Failed to fetch stock data');
        }
      } catch (err) {
        setError('An error occurred while fetching stock data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  return { data, loading, error };
}

// Helper functions to generate random stock data
function randomPrice(): number {
  return parseFloat((Math.random() * 500 + 20).toFixed(2));
}

function randomChange(): number {
  return parseFloat((Math.random() * 10 - 5).toFixed(2));
}

function randomChangePercent(): number {
  return parseFloat((Math.random() * 5 - 2.5).toFixed(2));
}

function randomVolume(): number {
  return Math.floor(Math.random() * 10000000) + 1000000;
}

function randomMarketCap(): number {
  return Math.floor(Math.random() * 1000000000000) + 10000000000;
}

function randomPeRatio(): number {
  return parseFloat((Math.random() * 50 + 5).toFixed(2));
}

function randomDividend(): number {
  return parseFloat((Math.random() * 5).toFixed(2));
}

function randomHigh(): number {
  return parseFloat((Math.random() * 600 + 50).toFixed(2));
}

function randomLow(): number {
  return parseFloat((Math.random() * 400 + 10).toFixed(2));
} 