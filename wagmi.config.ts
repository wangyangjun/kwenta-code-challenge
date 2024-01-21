import { defineConfig } from '@wagmi/cli';
import { etherscan, react } from '@wagmi/cli/plugins';
import { optimism } from 'wagmi/chains';

const PerpsV2MarketDataAddress = '0x340b5d664834113735730ad4afb3760219ad9112';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.OPTIMISTIC_ETHERSCAN_API_KEY!,
      chainId: optimism.id,
      contracts: [
        {
          name: 'PerpsV2MarketData',
          address: PerpsV2MarketDataAddress
        }
      ]
    }),
    react()
  ]
});
