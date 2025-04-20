'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface WatchlistItem extends Stock {
  addedAt: Date;
}

interface StockContextType {
  selectedStock: Stock | null;
  watchlist: WatchlistItem[];
  recentSearches: string[];
  setSelectedStock: (stock: Stock | null) => void;
  addToWatchlist: (stock: Stock) => void;
  removeFromWatchlist: (symbol: string) => void;
  addToRecentSearches: (symbol: string) => void;
  clearRecentSearches: () => void;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

interface StockProviderProps {
  children: ReactNode;
}

export function StockProvider({ children }: StockProviderProps) {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const addToWatchlist = (stock: Stock) => {
    // Don't add if already in watchlist
    if (watchlist.some(item => item.symbol === stock.symbol)) {
      return;
    }
    
    const watchlistItem: WatchlistItem = {
      ...stock,
      addedAt: new Date()
    };
    
    setWatchlist(prev => [watchlistItem, ...prev]);
  };

  const removeFromWatchlist = (symbol: string) => {
    setWatchlist(prev => prev.filter(item => item.symbol !== symbol));
  };

  const addToRecentSearches = (symbol: string) => {
    // Remove if already exists (to move to the top)
    setRecentSearches(prev => {
      const filtered = prev.filter(s => s !== symbol);
      // Add to beginning and limit to 10 items
      return [symbol, ...filtered].slice(0, 10);
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const value = {
    selectedStock,
    watchlist,
    recentSearches,
    setSelectedStock,
    addToWatchlist,
    removeFromWatchlist,
    addToRecentSearches,
    clearRecentSearches
  };

  return (
    <StockContext.Provider value={value}>
      {children}
    </StockContext.Provider>
  );
}

export function useStockContext() {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error('useStockContext must be used within a StockProvider');
  }
  return context;
} 