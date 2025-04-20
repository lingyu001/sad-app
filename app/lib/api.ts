// Utility for fetching data with improved caching
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit,
  revalidate: number = 60 // Default cache for 60 seconds
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      next: {
        revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Stock API calls
export async function getStockData(symbol: string) {
  return fetchWithCache(`/api/stocks?symbol=${symbol}`);
}

// Analysis API calls
export async function getStockAnalysis(symbol: string, analysisTypes: string[]) {
  if (!symbol || !analysisTypes.length) {
    throw new Error('Symbol and analysis types are required');
  }
  
  return fetchWithCache(`/api/analysis?symbol=${symbol}&types=${analysisTypes.join(',')}`);
} 