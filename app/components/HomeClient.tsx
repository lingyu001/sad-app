'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Header from '../../components/layout/Header';
import MarketOverview from '../../components/features/market/MarketOverview';
import StockSearch from '../../components/features/stocks/StockSearch';
import FundamentalData from '../../components/features/fundamental/FundamentalData';
import AnalysisPool from '../../components/features/analysis_pool/AnalysisPool';
import AnalysisResults from '../../components/features/analysis_pool/AnalysisResults';
import LoginModal from '../../components/modals/LoginModal';
import SubscriptionModal from '../../components/modals/SubscriptionModal';

// Import context and hooks
import { useStockContext } from '../../contexts/StockContext';
import { useStockData, useStockAnalysis } from '../hooks/useStockData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface User {
  email: string;
  name: string;
}

interface Credentials {
  email: string;
  password: string;
}

export default function HomeClient() {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState<boolean>(false);
  const [searchSymbol, setSearchSymbol] = useState<string | null>(null);
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([]);
  
  // Use custom hooks for data fetching
  const { stock, isLoading: isStockLoading, isError: stockError } = useStockData(searchSymbol);
  const { 
    analysis: analysisResults, 
    isLoading: isAnalysisLoading, 
    isError: analysisError 
  } = useStockAnalysis(searchSymbol, selectedAnalyses);

  const handleSearch = (symbol: string) => {
    setSearchSymbol(symbol);
  };

  const handleLogin = (credentials: Credentials) => {
    // Mock login
    setIsLoggedIn(true);
    setUser({ email: credentials.email, name: 'User' });
    setShowLoginModal(false);
  };

  const handleAnalysisSelect = (analysisTypes: string[]) => {
    setSelectedAnalyses(analysisTypes);
  };

  // Format stock data to match the expected format for FundamentalData component
  const formatStockForDisplay = (stockData: any) => {
    if (!stockData) return null;
    
    return {
      symbol: stockData.symbol,
      name: stockData.name,
      price: stockData.price,
      change: stockData.change,
      changePercent: stockData.changePercent,
      marketCap: formatNumber(stockData.marketCap),
      peRatio: stockData.peRatio,
      dividendYield: stockData.dividend + '%',
      volume: formatNumber(stockData.volume),
      avgVolume: formatNumber(stockData.volume * 1.1), // Mock avg volume
      yearRange: `${stockData.low52Week} - ${stockData.high52Week}`,
    };
  };

  // Helper to format numbers
  const formatNumber = (value: number) => {
    if (value >= 1e12) return (value / 1e12).toFixed(1) + 'T';
    if (value >= 1e9) return (value / 1e9).toFixed(1) + 'B';
    if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
    if (value >= 1e3) return (value / 1e3).toFixed(1) + 'K';
    return value.toString();
  };

  const formattedStock = stock ? formatStockForDisplay(stock) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onLoginClick={() => setShowLoginModal(true)}
        onSubscriptionClick={() => setShowSubscriptionModal(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <MarketOverview />
        
        <div className="mt-8">
          <StockSearch onSearch={handleSearch} />
        </div>

        {isStockLoading && (
          <div className="my-10 flex justify-center">
            <div className="animate-pulse flex space-x-4 items-center">
              <div className="h-12 w-12 bg-blue-400 rounded-full"></div>
              <div className="text-lg font-medium text-gray-700">Loading stock data...</div>
            </div>
          </div>
        )}

        {stockError && (
          <div className="my-10 p-4 bg-red-50 text-red-700 rounded-lg">
            Error loading stock data. Please try again.
          </div>
        )}

        {formattedStock && (
          <div className="mt-8">
            <FundamentalData stock={formattedStock} />
          </div>
        )}

        {formattedStock && (
          <div className="mt-10">
            <DndProvider backend={HTML5Backend}>
              <AnalysisPool 
                onAnalysisSelect={handleAnalysisSelect} 
              />
            </DndProvider>
          </div>
        )}

        {isAnalysisLoading && (
          <div className="my-10 flex justify-center">
            <div className="animate-pulse flex space-x-4 items-center">
              <div className="h-12 w-12 bg-blue-400 rounded-full"></div>
              <div className="text-lg font-medium text-gray-700">Generating analysis...</div>
            </div>
          </div>
        )}

        {analysisError && (
          <div className="my-10 p-4 bg-red-50 text-red-700 rounded-lg">
            Error generating analysis. Please try again.
          </div>
        )}

        {analysisResults && !isAnalysisLoading && (
          <div className="mt-8">
            <AnalysisResults results={analysisResults} />
          </div>
        )}
      </main>

      <AnimatePresence>
        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSubscriptionModal && (
          <SubscriptionModal 
            onClose={() => setShowSubscriptionModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 