import type { NextApiRequest, NextApiResponse } from 'next';

interface StockData {
  symbol: string;
  name: string;
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

// Mock database of stock names
const stockNames: Record<string, string> = {
  'AAPL': 'Apple Inc.',
  'MSFT': 'Microsoft Corporation',
  'GOOGL': 'Alphabet Inc.',
  'AMZN': 'Amazon.com Inc.',
  'META': 'Meta Platforms Inc.',
  'TSLA': 'Tesla Inc.',
  'NVDA': 'NVIDIA Corporation',
  'NFLX': 'Netflix Inc.',
  'JPM': 'JPMorgan Chase & Co.',
  'V': 'Visa Inc.',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  const { symbol } = req.query;

  // Validate the symbol
  if (!symbol || typeof symbol !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Stock symbol is required'
    });
  }

  const upperSymbol = symbol.toUpperCase();

  // Check if symbol exists in our mock database
  if (!stockNames[upperSymbol]) {
    return res.status(404).json({
      success: false,
      error: 'Stock not found'
    });
  }

  // Generate mock stock data
  const stockData: StockData = {
    symbol: upperSymbol,
    name: stockNames[upperSymbol],
    price: randomPrice(),
    change: randomChange(),
    changePercent: randomChangePercent(),
    volume: randomVolume(),
    marketCap: randomMarketCap(),
    peRatio: randomPeRatio(),
    dividend: randomDividend(),
    high52Week: randomHigh(),
    low52Week: randomLow()
  };

  return res.status(200).json({
    success: true,
    data: stockData
  });
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