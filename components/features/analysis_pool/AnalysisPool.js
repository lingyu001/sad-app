// components/AnalysisPool.js
import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { motion, AnimatePresence } from 'framer-motion';

// Analysis bubble component
const AnalysisBubble = ({ type, color, isInPool, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'analysis',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const labels = {
    news: 'News Analysis',
    market: 'Market Analysis',
    technical: 'Technical Analysis',
    economic: 'Economic Analysis',
  };

  const icons = {
    news: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    market: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    technical: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    economic: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <motion.div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={`cursor-grab ${isInPool ? 'hidden' : ''}`}
      whileHover={{ scale: 1.05 }}
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{ 
        y: { 
          repeat: Infinity, 
          duration: 2,
          repeatType: "reverse" 
        } 
      }}
    >
      <div 
        className={`w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg ${color}`}
      >
        <div className="text-center">
          {icons[type]}
          <div className="text-xs mt-1 font-medium">{labels[type]}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Merged bubble component
const MergedBubble = ({ pooledAnalyses, analysisTypes }) => {
  const getSize = () => {
    const baseSize = 24;
    const increment = 8;
    return baseSize + (pooledAnalyses.length * increment);
  };
  
  const size = `${getSize()}rem`;
  
  // Get a gradient color based on pooled analyses
  const getGradientClass = () => {
    if (pooledAnalyses.length === 1) {
      const analysis = analysisTypes.find(a => a.type === pooledAnalyses[0]);
      return analysis.color;
    }
    return 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500';
  };
  
  // Generate concatenated name
  const getMergedName = () => {
    if (pooledAnalyses.length === 0) return '';
    
    // For 3 or more types, return something like "Multi-Analysis (4)"
    if (pooledAnalyses.length > 2) {
      return `Multi-Analysis (${pooledAnalyses.length})`;
    }
    
    // For 1 or 2 types, show the actual names
    return pooledAnalyses.map(type => 
      type.charAt(0).toUpperCase() + type.slice(1)
    ).join(' + ');
  };

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        style={{ width: size, height: size }}
        className={`rounded-full flex items-center justify-center text-white shadow-xl ${getGradientClass()}`}
      >
        <div className="text-center p-2">
          {pooledAnalyses.length > 0 && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="mt-2 font-bold text-sm">{getMergedName()}</div>
              <div className="text-xs mt-1">
                {pooledAnalyses.length > 2 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {pooledAnalyses.map(type => (
                      <span key={type} className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Analysis pool component
export default function AnalysisPool({ onAnalysisSelect }) {
  const [pooledAnalyses, setPooledAnalyses] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  const [selectedAnalyses, setSelectedAnalyses] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'analysis',
    drop: (item) => {
      handleDrop(item.type);
      return { name: 'AnalysisPool' };
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleDrop = (type) => {
    if (!pooledAnalyses.includes(type)) {
      setPooledAnalyses([...pooledAnalyses, type]);
    }
  };

  const handleReset = () => {
    setPooledAnalyses([]);
    setIsExploding(false);
  };

  const handleGenerate = () => {
    if (pooledAnalyses.length > 0) {
      setIsExploding(true);
      setTimeout(() => {
        setSelectedAnalyses(pooledAnalyses);
        onAnalysisSelect(pooledAnalyses);
      }, 1000);
    }
  };

  // Analysis types with their colors
  const analysisTypes = [
    { type: 'news', color: 'bg-purple-500' },
    { type: 'market', color: 'bg-blue-500' },
    { type: 'technical', color: 'bg-green-500' },
    { type: 'economic', color: 'bg-green-500' }
  ];

return (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Customize Your Analysis</h2>
    
    <div className="flex flex-col md:flex-row">
      {/* Analysis bubbles section */}
      <div className="flex-1">
        <p className="text-gray-600 mb-4">Drag analysis types to the pool to customize your insights</p>
        
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {analysisTypes.map((analysis) => (
            <AnalysisBubble 
              key={analysis.type}
              type={analysis.type}
              color={analysis.color}
              isInPool={pooledAnalyses.includes(analysis.type)}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
      
      {/* Analysis pool section */}
      <div className="mt-8 md:mt-0 md:ml-8 flex-1">
        <div 
          ref={drop} 
          className={`
            rounded-lg border-2 border-dashed p-8 flex flex-col items-center justify-center
            transition-all duration-300 min-h-64
            ${isOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            ${isExploding ? 'bg-gradient-to-r from-blue-100 to-purple-100' : ''}
          `}
        >
          {isExploding ? (
            <motion.div
              animate={{
                scale: [1, 1.5, 0],
                opacity: [1, 0.8, 0],
              }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
          ) : pooledAnalyses.length > 0 ? (
            <>
              <MergedBubble 
                pooledAnalyses={pooledAnalyses} 
                analysisTypes={analysisTypes} 
              />
              
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                >
                  Reset
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGenerate}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
                >
                  Generate Analysis
                </motion.button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-2">Drop analysis bubbles here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}