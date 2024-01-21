'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Table, Title } from '@/components/table';
import useAllMarketSummaries from '@/hooks/useAllMarketSummaries';
import { MarketSummary } from '@/types';
import styles from './page.module.css';
import { useEffect } from 'react';

const columnHelper = createColumnHelper<MarketSummary>();

const columns = [
  columnHelper.accessor('market', {
    header: () => 'MARKET',
    cell: props => <strong>{props.getValue().toUpperCase()}</strong>
  }),
  columnHelper.accessor('price', {
    header: () => 'PRICE'
  }),
  columnHelper.accessor('marketSize', {
    header: () => 'MARKET SIZE'
  }),
  columnHelper.accessor('fee', {
    header: () => 'MARKER/TAKER'
  })
];

const POLLING_INTERVAL = 3000;

export default function Home() {
  const { summaries, isLoading, refetch } = useAllMarketSummaries();

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, POLLING_INTERVAL);
    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  return (
    <div className={styles.main}>
      <Table columns={columns} data={summaries} isLoading={isLoading} title={<Title>Synthetix Perps Markets</Title>} />
    </div>
  );
}
