import { NextRequest, NextResponse } from 'next/server';
import { ApiError, createErrorResponse } from '../../lib/error';

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');

    // Validate the symbol
    if (!symbol) {
      throw new ApiError('Stock symbol is required', 400);
    }

    const upperSymbol = symbol.toUpperCase();

    // Check if symbol exists in our mock database
    if (!stockNames[upperSymbol]) {
      throw new ApiError('Stock not found', 404);
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

    return NextResponse.json({
      success: true,
      data: stockData
    });
  } catch (error) {
    return createErrorResponse(error);
  }
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