import React from 'react';

interface ActivityItemProps {
  action: string;
  result?: string;
  timestamp: string;
  isFirst?: boolean;
}

export default function ActivityItem({ action, result, timestamp, isFirst = false }: ActivityItemProps) {
  const getResultColor = () => {
    if (!result) return 'text-gray-600';
    if (result.includes('+')) return 'text-green-600';
    if (result.includes('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className={`activity-fade-in ${!isFirst ? 'border-t border-gray-100 pt-4' : ''}`}>
      <div className="flex justify-between items-center py-2">
        <div className="flex-1">
          <span className="text-gray-900 font-medium">{action}</span>
          {result && (
            <span className={`ml-2 ${getResultColor()}`}>{result}</span>
          )}
        </div>
        <span className="text-sm text-gray-500 ml-4">{timestamp}</span>
      </div>
    </div>
  );
}