import { useMemo } from 'react';
import { hexToString } from 'viem';
import { FuturesMarketAsset } from '@kwenta/sdk/types';

import { formatMoney, formatPercent } from '@/utils/numbers';
import { MarketSummary } from '@/types';
import { useReadPerpsV2MarketDataAllMarketSummaries } from '@/generated';

type SummaryResult = {
  summaries: MarketSummary[];
  isLoading: boolean;
  isSuccess: boolean;
  refetch: () => void;
};

const useAllMarketSummaries = (): SummaryResult => {
  const { data, isLoading, isSuccess, refetch } = useReadPerpsV2MarketDataAllMarketSummaries();

  const summaries = useMemo(() => {
    if (isSuccess && data) {
      return data.map(item => ({
        market: `${hexToString(item.asset, { size: 32 })}-PERP`,
        asset: hexToString(item.asset, { size: 32 }) as FuturesMarketAsset,
        key: hexToString(item.key, { size: 32 }),
        price: formatMoney(item.price),
        marketSize: formatMoney(item.marketSize),
        fee: `${formatPercent(item.feeRates.makerFeeOffchainDelayedOrder)}/${formatPercent(item.feeRates.takerFeeOffchainDelayedOrder)}`
      }));
    }
    return [];
  }, [data, isSuccess]); // Only recompute if data or isSuccess changes

  return { summaries, isLoading, isSuccess, refetch };
};

export default useAllMarketSummaries;
