import { NextRequest, NextResponse } from 'next/server';
import { ApiError, createErrorResponse } from '../../lib/error';

interface AnalysisResult {
  stock: string;
  types: string[];
  data: {
    sentiment: number | null;
    technicalSignal: string | null;
    marketPosition: string | null;
    economicImpact: string | null;
    charts: {
      historic: number[];
      forecast: number[];
    };
    analysis: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');
    const types = searchParams.get('types');

    // Validate the required parameters
    if (!symbol) {
      throw new ApiError('Stock symbol is required', 400);
    }

    if (!types) {
      throw new ApiError('Analysis types are required', 400);
    }

    // Parse the analysis types
    const analysisTypes = types.split(',');

    // Generate mock analysis data
    const analysisResult: AnalysisResult = {
      stock: symbol,
      types: analysisTypes,
      data: {
        sentiment: analysisTypes.includes('news') ? 0.75 : null, // Positive sentiment
        technicalSignal: analysisTypes.includes('technical') ? 'bullish' : null,
        marketPosition: analysisTypes.includes('market') ? 'outperforming' : null,
        economicImpact: analysisTypes.includes('economic') ? 'moderate positive' : null,
        charts: {
          historic: [65, 59, 80, 81, 56, 55, 40, 60, 70, 45, 55, 72],
          forecast: [72, 78, 82, 79, 85, 90, 92],
        },
        analysis: "Based on strong quarterly earnings and positive market trends, this stock shows promising growth potential. Technical indicators suggest a bullish trend forming with support at recent price levels."
      }
    };

    // Simulate a delay for a more realistic API response
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: analysisResult
    });
  } catch (error) {
    return createErrorResponse(error);
  }
} 