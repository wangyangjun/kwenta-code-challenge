'use client';

import { useState, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, WagmiProvider } from 'wagmi';
import { createClient } from 'viem';
import { optimism } from 'viem/chains';
import transport from '../utils/network';

const config = createConfig({
  chains: [optimism],
  client({ chain }) {
    return createClient({ chain, transport });
  }
});

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
