// components/AnalysisResults.js
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

export default function AnalysisResults({ results }) {
  const [activeTab, setActiveTab] = useState('summary');
  
  const getTypeLabel = (type) => {
    const labels = {
      news: 'News',
      market: 'Market',
      technical: 'Technical',
      economic: 'Economic',
    };
    return labels[type] || type;
  };
  
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'chart', label: 'Chart' },
    { id: 'details', label: 'Detailed Analysis' },
  ];

  // Chart options and data
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Historic Price',
        data: results.data.charts.historic,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Forecast',
        data: [...Array(5).fill(null), ...results.data.charts.forecast],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  // Generate indicators for the selected analysis types
  const renderIndicators = () => {
    const indicators = [];
    
    if (results.types.includes('news')) {
      indicators.push({
        label: 'News Sentiment',
        value: results.data.sentiment,
        color: results.data.sentiment > 0.6 ? 'green' : results.data.sentiment < 0.4 ? 'red' : 'amber',
        description: results.data.sentiment > 0.6 ? 'Positive' : results.data.sentiment < 0.4 ? 'Negative' : 'Neutral',
      });
    }
    
    if (results.types.includes('technical')) {
      indicators.push({
        label: 'Technical Signal',
        value: results.data.technicalSignal,
        color: results.data.technicalSignal === 'bullish' ? 'green' : results.data.technicalSignal === 'bearish' ? 'red' : 'amber',
        description: results.data.technicalSignal.charAt(0).toUpperCase() + results.data.technicalSignal.slice(1),
      });
    }
    
    if (results.types.includes('market')) {
      indicators.push({
        label: 'Market Position',
        value: results.data.marketPosition,
        color: results.data.marketPosition === 'outperforming' ? 'green' : results.data.marketPosition === 'underperforming' ? 'red' : 'amber',
        description: results.data.marketPosition.charAt(0).toUpperCase() + results.data.marketPosition.slice(1),
      });
    }
    
    if (results.types.includes('economic')) {
      indicators.push({
        label: 'Economic Impact',
        value: results.data.economicImpact,
        color: results.data.economicImpact.includes('positive') ? 'green' : results.data.economicImpact.includes('negative') ? 'red' : 'amber',
        description: results.data.economicImpact.charAt(0).toUpperCase() + results.data.economicImpact.slice(1),
      });
    }
    
    return indicators;
  };

  const indicators = renderIndicators();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Analysis Results: {results.stock}</h2>
          <div className="flex gap-1">
            {results.types.map(type => (
              <span 
                key={type}
                className={`text-xs px-2 py-1 rounded-full ${
                  type === 'news' ? 'bg-purple-100 text-purple-700' :
                  type === 'market' ? 'bg-blue-100 text-blue-700' :
                  type === 'technical' ? 'bg-green-100 text-green-700' :
                  'bg-orange-100 text-orange-700'
                }`}
              >
                {getTypeLabel(type)}
              </span>
            ))}
          </div>
        </div>

        {/* Tab navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-2 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab content */}
        <div className="mt-4">
          {activeTab === 'summary' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {indicators.map((indicator) => (
                  <div key={indicator.label} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">{indicator.label}</div>
                    <div className="mt-1 flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-${indicator.color}-500 mr-2`}></div>
                      <span className="font-medium text-gray-800">{indicator.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Summary</h3>
                <p className="text-gray-700">{results.data.analysis}</p>
              </div>
            </div>
          )}

          {activeTab === 'chart' && (
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-6">
              {results.types.includes('news') && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-800 mb-2">News Analysis</h3>
                  <p className="text-gray-700">
                    Recent news sentiment for {results.stock} is {results.data.sentiment > 0.6 ? 'strongly positive' : results.data.sentiment < 0.4 ? 'negative' : 'neutral'}. 
                    Media coverage has focused on product innovations and market expansion opportunities.
                    Social media engagement shows increasing interest in the company's recent announcements.
                  </p>
                </div>
              )}
              
              {results.types.includes('technical') && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Technical Analysis</h3>
                  <p className="text-gray-700">
                    Technical indicators suggest a {results.data.technicalSignal} trend. The stock is trading 
                    {results.data.technicalSignal === 'bullish' ? ' above ' : ' below '} its 50-day and 200-day moving averages.
                    Relative Strength Index (RSI) is currently at {Math.floor(Math.random() * 30) + 40}, indicating 
                    {results.data.technicalSignal === 'bullish' ? ' room for continued growth.' : ' potential for a reversal.'}
                  </p>
                </div>
              )}
              
              {results.types.includes('market') && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Market Analysis</h3>
                  <p className="text-gray-700">
                    Compared to its sector, {results.stock} is {results.data.marketPosition}. 
                    Its beta coefficient is {(Math.random() * 0.5 + 0.8).toFixed(2)}, indicating 
                    {results.data.marketPosition === 'outperforming' ? ' moderately higher ' : ' similar '} 
                    volatility compared to the overall market. The stock has shown 
                    {results.data.marketPosition === 'outperforming' ? ' stronger ' : ' weaker '} 
                    performance than its peers in the last quarter.
                  </p>
                </div>
              )}
              
              {results.types.includes('economic') && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-medium text-orange-800 mb-2">Economic Analysis</h3>
                  <p className="text-gray-700">
                    Current economic factors have a {results.data.economicImpact} impact on {results.stock}. 
                    Interest rate trends and inflation metrics suggest 
                    {results.data.economicImpact.includes('positive') ? ' favorable ' : ' challenging '} 
                    conditions for the company's growth. Consumer spending patterns and supply chain dynamics 
                    align with the company's operational model.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex justify-between">
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save Analysis
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </motion.div>
  );
}