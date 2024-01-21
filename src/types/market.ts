import { FuturesMarketAsset } from '@kwenta/sdk/types';

export type MarketSummary = {
  market: string;
  key: string;
  asset: FuturesMarketAsset;
  price: string;
  marketSize: string;
  fee: string;
};
