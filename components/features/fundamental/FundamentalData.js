// components/FundamentalData.js
import { motion } from 'framer-motion';

export default function FundamentalData({ stock }) {
  const metrics = [
    { label: 'Market Cap', value: stock.marketCap },
    { label: 'P/E Ratio', value: stock.peRatio },
    { label: 'Dividend Yield', value: stock.dividendYield },
    { label: 'Volume', value: stock.volume },
    { label: 'Avg Volume', value: stock.avgVolume },
    { label: '52-Week Range', value: stock.yearRange },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{stock.symbol}</h2>
            <p className="text-gray-600">{stock.name}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">${stock.price}</div>
            <div className={`flex items-center justify-end ${stock.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stock.change > 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              <span>${Math.abs(stock.change)} ({stock.changePercent}%)</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-base font-medium text-gray-800 mt-1">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button 
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Add to Watchlist
          </button>
        </div>
      </div>
    </motion.div>
  );
}