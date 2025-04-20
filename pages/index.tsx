import { useState, useEffect } from 'react';
import Head from 'next/head';
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

// Import components from new structure
import Header from '../components/layout/Header';
import MarketOverview from '../components/features/market/MarketOverview';
import StockSearch from '../components/features/stocks/StockSearch';
import FundamentalData from '../components/features/fundamental/FundamentalData';
import AnalysisPool from '../components/features/analysis_pool/AnalysisPool';
import AnalysisResults from '../components/features/analysis_pool/AnalysisResults';
import LoginModal from '../components/modals/LoginModal';
import SubscriptionModal from '../components/modals/SubscriptionModal';

// Import context
import { useStockContext } from '../contexts/StockContext';

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

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  peRatio: number;
  dividendYield: string;
  volume: string;
  avgVolume: string;
  yearRange: string;
}

interface User {
  email: string;
  name: string;
}

interface Credentials {
  email: string;
  password: string;
}

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

export default function Home() {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState<boolean>(false);
  const [searchedStock, setSearchedStock] = useState<Stock | null>(null);
  const [selectedAnalyses, setSelectedAnalyses] = useState<string[]>([]);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Mock function to simulate API call for analysis
  const fetchAnalysisResults = async (stock: string, analysisTypes: string[]) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response
    setAnalysisResults({
      stock: stock,
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
    });
    
    setIsLoading(false);
  };

  const handleSearch = (symbol: string) => {
    // Mock stock data retrieval
    setSearchedStock({
      symbol: symbol,
      name: `${symbol} Corporation`,
      price: 156.78,
      change: 2.34,
      changePercent: 1.52,
      marketCap: '842.3B',
      peRatio: 24.5,
      dividendYield: '1.2%',
      volume: '12.4M',
      avgVolume: '15.2M',
      yearRange: '112.34 - 198.23',
    });
  };

  const handleLogin = (credentials: Credentials) => {
    // Mock login
    setIsLoggedIn(true);
    setUser({ email: credentials.email, name: 'User' });
    setShowLoginModal(false);
  };

  const handleAnalysisSelect = (analysisTypes: string[]) => {
    if (searchedStock) {
      fetchAnalysisResults(searchedStock.symbol, analysisTypes);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>StockInsight | Smart Analysis for Everyone</title>
        <meta name="description" content="Simple stock analysis for non-experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

        {searchedStock && (
          <div className="mt-8">
            <FundamentalData stock={searchedStock} />
          </div>
        )}

        {searchedStock && (
          <div className="mt-10">
            <DndProvider backend={HTML5Backend}>
              <AnalysisPool 
                onAnalysisSelect={handleAnalysisSelect} 
              />
            </DndProvider>
          </div>
        )}

        {isLoading && (
          <div className="my-10 flex justify-center">
            <div className="animate-pulse flex space-x-4 items-center">
              <div className="h-12 w-12 bg-blue-400 rounded-full"></div>
              <div className="text-lg font-medium text-gray-700">Generating analysis...</div>
            </div>
          </div>
        )}

        {analysisResults && !isLoading && (
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