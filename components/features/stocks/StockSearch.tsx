import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';

interface StockItem {
  symbol: string;
  name: string;
}

interface StockSearchProps {
  onSearch: (symbol: string) => void;
}

export default function StockSearch({ onSearch }: StockSearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<StockItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  
  // Mock popular stocks
  const popularStocks: StockItem[] = [
    { symbol: 'AAPL', name: 'Apple' },
    { symbol: 'MSFT', name: 'Microsoft' },
    { symbol: 'GOOGL', name: 'Alphabet' },
    { symbol: 'AMZN', name: 'Amazon' },
    { symbol: 'TSLA', name: 'Tesla' },
  ];
  
  // Mock function to get search suggestions
  const getSuggestions = (query: string): StockItem[] => {
    if (!query) return [];
    
    const mockSuggestions: StockItem[] = [
      { symbol: 'AAPL', name: 'Apple Inc.' },
      { symbol: 'MSFT', name: 'Microsoft Corporation' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.' },
      { symbol: 'AMZN', name: 'Amazon.com Inc.' },
      { symbol: 'META', name: 'Meta Platforms Inc.' },
      { symbol: 'TSLA', name: 'Tesla Inc.' },
      { symbol: 'NVDA', name: 'NVIDIA Corporation' },
      { symbol: 'NFLX', name: 'Netflix Inc.' },
    ];
    
    return mockSuggestions.filter(item => 
      item.symbol.toLowerCase().includes(query.toLowerCase()) || 
      item.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 1) {
      setSuggestions(getSuggestions(value));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  
  const handleSearch = (symbol: string) => {
    setSearchQuery(symbol);
    setShowSuggestions(false);
    onSearch(symbol);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery) {
      handleSearch(searchQuery);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Analysis</h2>
      
      <div className="relative">
        <div className="flex">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search by stock symbol (e.g., AAPL)"
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                {suggestions.map((item) => (
                  <div
                    key={item.symbol}
                    onClick={() => handleSearch(item.symbol)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                  >
                    <span className="font-medium">{item.symbol}</span>
                    <span className="text-gray-600 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button 
            variant="primary"
            onClick={() => handleSearch(searchQuery)}
            className="rounded-l-none"
          >
            Search
          </Button>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">Popular:</span>
          {popularStocks.map((stock) => (
            <button
              key={stock.symbol}
              onClick={() => handleSearch(stock.symbol)}
              className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
            >
              {stock.symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 