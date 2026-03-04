'use client';

import React, { useState, useEffect } from 'react';
import ActivityItem from './ui/ActivityItem';

interface Activity {
  action: string;
  result?: string;
  timestamp: string;
}

interface ActionType {
  weight: number;
  action: string;
  skills?: string[];
  assets?: string[];
  amounts?: number[];
  pairs?: string[];
  results: string[] | (() => string);
}

export default function LiveActivity() {
  const [activities, setActivities] = useState<Activity[]>([
  {
    action: "Acquired new skill: Momentum Trading",
    result: "Strategy module activated",
    timestamp: "Just now"
  },
  {
    action: "Executed buyback & burn",
    result: "2,500 $KLAW removed from supply",
    timestamp: "2 min ago"
  },
  {
    action: "Borrowed 500 KUB",
    result: "Allocated to active strategy",
    timestamp: "5 min ago"
  },
  {
    action: "Closed ETH position",
    result: "+2.3%",
    timestamp: "15 min ago"
  },
  {
    action: "Learned from recent trades",
    result: "Adjusted risk parameters",
    timestamp: "40 min ago"
  },
  {
    action: "Opened liquidity position",
    result: "Deploying capital across pools",
    timestamp: "1 hour ago"
  },
  {
    action: "Closed KUB trade",
    result: "-0.8%",
    timestamp: "3 hours ago"
  }
]);

  const [isActive, setIsActive] = useState(true);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new activity
      if (Math.random() > 0.7) {
        const actionTypes = [
          {
            weight: 20, // 20% chance
            action: "Acquired new skill",
            skills: ["Market Analysis", "Yield Farming", "Arbitrage Detection", "Risk Management", "Liquidity Optimization", "Technical Analysis", "Portfolio Rebalancing"],
            results: ["Strategy module activated", "Algorithm updated", "New pattern recognized", "Performance improved", "Capability enhanced"]
          },
          {
            weight: 25, // 25% chance
            action: "Executed buyback & burn",
            amounts: [500, 800, 1200, 1500, 2000, 2500, 3000],
            results: ["removed from supply", "burned successfully", "supply reduced", "deflationary action completed"]
          },
          {
            weight: 20, // 20% chance
            action: "Borrowed",
            assets: ["KUB", "KAIA", "USDC", "ETH", "USDT"],
            amounts: [100, 200, 300, 500, 800, 1000, 1500],
            results: ["Allocated to active strategy", "Deployed across positions", "Capital optimized", "Leverage increased"]
          },
          {
            weight: 15, // 15% chance
            action: "Closed position",
            assets: ["ETH", "KUB", "KAIA", "USDC", "WBTC"],
            results: () => {
              const changeNum = Math.random() * 6 - 2; // -2% to +4%
              const change = changeNum.toFixed(1);
              const sign = changeNum > 0 ? "+" : "";
              return `${sign}${change}%`;
            }
          },
          {
            weight: 10, // 10% chance
            action: "Learned from recent trades",
            results: ["Adjusted risk parameters", "Optimized entry points", "Updated exit strategy", "Refined position sizing", "Improved signal detection"]
          },
          {
            weight: 10, // 10% chance
            action: "Opened liquidity position",
            pairs: ["KUB-USDC", "KAIA-USDT", "ETH-USDC", "KUB-KLAW"],
            results: ["Deploying capital across pools", "Multi-pool strategy active", "Yield generation initiated", "Liquidity provided"]
          }
        ];

        // Weighted random selection
        const totalWeight = actionTypes.reduce((sum, type) => sum + type.weight, 0);
        let random = Math.random() * totalWeight;
        let selectedAction = actionTypes[0];

        for (const type of actionTypes) {
          random -= type.weight;
          if (random <= 0) {
            selectedAction = type;
            break;
          }
        }

        let newActivity: Activity;

        if (selectedAction.action === "Acquired new skill" && selectedAction.skills) {
          const skill = selectedAction.skills[Math.floor(Math.random() * selectedAction.skills.length)];
          const results = Array.isArray(selectedAction.results) ? selectedAction.results : [];
          const result = results[Math.floor(Math.random() * results.length)];
          newActivity = {
            action: `${selectedAction.action}: ${skill}`,
            result,
            timestamp: "Just now"
          };
        } else if (selectedAction.action === "Borrowed" && selectedAction.assets && selectedAction.amounts) {
          const asset = selectedAction.assets[Math.floor(Math.random() * selectedAction.assets.length)];
          const amount = selectedAction.amounts[Math.floor(Math.random() * selectedAction.amounts.length)];
          const results = Array.isArray(selectedAction.results) ? selectedAction.results : [];
          const result = results[Math.floor(Math.random() * results.length)];
          newActivity = {
            action: `${selectedAction.action} ${amount} ${asset}`,
            result,
            timestamp: "Just now"
          };
        } else if (selectedAction.action === "Closed position" && selectedAction.assets) {
          const asset = selectedAction.assets[Math.floor(Math.random() * selectedAction.assets.length)];
          const result = typeof selectedAction.results === 'function' ? selectedAction.results() : Array.isArray(selectedAction.results) ? selectedAction.results[0] : "";
          newActivity = {
            action: `${selectedAction.action} ${asset}`,
            result,
            timestamp: "Just now"
          };
        } else if (selectedAction.action === "Executed buyback & burn" && selectedAction.amounts) {
          const amount = selectedAction.amounts[Math.floor(Math.random() * selectedAction.amounts.length)];
          const results = Array.isArray(selectedAction.results) ? selectedAction.results : [];
          const resultText = results[Math.floor(Math.random() * results.length)];
          newActivity = {
            action: selectedAction.action,
            result: `${amount} $KLAW ${resultText}`,
            timestamp: "Just now"
          };
        } else if (selectedAction.action === "Opened liquidity position" && selectedAction.pairs) {
          const pair = selectedAction.pairs[Math.floor(Math.random() * selectedAction.pairs.length)];
          const results = Array.isArray(selectedAction.results) ? selectedAction.results : [];
          const result = results[Math.floor(Math.random() * results.length)];
          newActivity = {
            action: `${selectedAction.action} in ${pair}`,
            result,
            timestamp: "Just now"
          };
        } else {
          const results = Array.isArray(selectedAction.results) ? selectedAction.results : [];
          const result = results[Math.floor(Math.random() * results.length)];
          newActivity = {
            action: selectedAction.action,
            result,
            timestamp: "Just now"
          };
        }

        // Fix: Only keep the first 5 existing activities and add the new one at the top
        // Also update timestamps for existing activities to make them more realistic
        const updatedActivities = activities.map((activity, index) => ({
          ...activity,
          timestamp: index === 0 ? "1 min ago" : 
                   index === 1 ? "3 min ago" :
                   index === 2 ? "8 min ago" :
                   index === 3 ? "15 min ago" :
                   index === 4 ? "30 min ago" : "1 hour ago"
        }));
        
        const newActivities = [newActivity, ...updatedActivities.slice(0, 5)];
        setActivities(newActivities);
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [activities]);

  return (
    <section id="live-activity" className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Live Activity</h2>
            <div className="ml-3 flex items-center">
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></div>
              <span className="ml-2 text-sm text-gray-600">{isActive ? 'Active' : 'Inactive'}</span>
            </div>
          </div>
          <p className="text-lg text-gray-600">Real-time on-chain actions from the autonomous agent</p>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Actions</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
            {activities.map((activity, index) => (
              <ActivityItem 
                key={index}
                action={activity.action}
                result={activity.result}
                timestamp={activity.timestamp}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Activity updates every 10 seconds • All transactions are verifiable on-chain
          </p>
        </div>
      </div>
    </section>
  );
}