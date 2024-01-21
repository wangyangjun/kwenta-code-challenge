'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { Table, Title } from '@/components/table';
import useAllMarketSummaries from './hooks/useAllMarketSummaries';
import styles from './page.module.css';
import { MarketSummary } from './types';

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

export default function Home() {
  const { summaries, isLoading } = useAllMarketSummaries();

  return (
    <div className={styles.main}>
      <Table columns={columns} data={summaries} isLoading={isLoading} title={<Title>Synthetix Perps Markets</Title>} />
    </div>
  );
}
