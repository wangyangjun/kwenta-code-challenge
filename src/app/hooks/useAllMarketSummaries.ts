import { useMemo } from 'react';
import { hexToString } from 'viem';

import { formatMoney, formatPercent } from '@/utils/numbers';
import { useReadPerpsV2MarketDataAllMarketSummaries } from '../../generated';

export type MarketSummary = {
  market: string;
  key: string;
  price: string;
  marketSize: string;
  fee: string;
};

type SummaryResult = {
  summaries: MarketSummary[];
  isLoading: boolean;
  isSuccess: boolean;
};

const useAllMarketSummaries = (): SummaryResult => {
  const { data, isLoading, isSuccess } = useReadPerpsV2MarketDataAllMarketSummaries();

  const summaries = useMemo(() => {
    if (isSuccess && data) {
      return data.map(item => ({
        market: `${hexToString(item.asset, { size: 32 })}-PERP`,
        key: hexToString(item.key, { size: 32 }),
        price: formatMoney(item.price),
        marketSize: formatMoney(item.marketSize),
        fee: `${formatPercent(item.feeRates.makerFeeOffchainDelayedOrder)}/${formatPercent(item.feeRates.takerFeeOffchainDelayedOrder)}`
      }));
    }
    return [];
  }, [data, isSuccess]); // Only recompute if data or isSuccess changes

  return { summaries, isLoading, isSuccess };
};

export default useAllMarketSummaries;
