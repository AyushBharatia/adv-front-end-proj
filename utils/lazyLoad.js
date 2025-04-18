'use client';

import { Suspense, lazy } from 'react';
import React from 'react';

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    padding: '2rem', 
    textAlign: 'center',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div>
      <div 
        style={{ 
          display: 'inline-block',
          width: '30px',
          height: '30px',
          border: '3px solid #e0e0e0',
          borderRadius: '50%',
          borderTopColor: '#3498db',
          animation: 'spin 1s linear infinite',
          marginBottom: '1rem'
        }} 
      />
      <p>Loading...</p>
    </div>
    <style jsx>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

/**
 * Lazy load a component with Suspense
 * @param {Function} importFunc - Dynamic import function
 * @param {Object} options - Additional options
 * @param {React.ComponentType} options.fallback - Custom loading component
 * @returns {React.ComponentType} - Lazy loaded component wrapped in Suspense
 */
export function lazyLoad(importFunc, { fallback = <LoadingFallback /> } = {}) {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
} 