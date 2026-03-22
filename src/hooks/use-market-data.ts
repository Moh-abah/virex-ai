// hooks/use-market-data.ts
import { useEffect, useState } from 'react';

export interface MarketItem {
 symbol: string;
 score: number;
}

interface MarketData {
 best: MarketItem[];
 worst: MarketItem[];
}

export function useMarketData() {
 const [data, setData] = useState<MarketData>({ best: [], worst: [] });
 const [isConnected, setIsConnected] = useState(false);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  // استخدم متغير البيئة أو الرابط الثابت
  // const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://bavps.duckdns.
  const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'wss://saifalibot.com/ws/market-data';
  const ws = new WebSocket(wsUrl);

  ws.onopen = () => {
   setIsConnected(true);
   setError(null);
   console.log('✅ WebSocket connected to market data');
  };

  ws.onmessage = (event) => {
   try {
    const newData = JSON.parse(event.data);
    setData(newData);
   } catch (err) {
    console.error('❌ Failed to parse market data', err);
    setError('Invalid data format');
   }
  };

  ws.onerror = (event) => {
   console.error('❌ WebSocket error', event);
   setError('Connection error');
   setIsConnected(false);
  };

  ws.onclose = () => {
   setIsConnected(false);
   console.log('🔌 WebSocket disconnected');
  };

  return () => {
   ws.close();
  };
 }, []);

 return { data, isConnected, error };
}
