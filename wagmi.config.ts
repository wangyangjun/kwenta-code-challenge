import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins';
import { optimism } from 'wagmi/chains';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: optimism.id,
      contracts: [
        {
          name: 'PerpsV2MarketData',
          address: '0x340B5d664834113735730Ad4aFb3760219Ad9112'
        }
      ]
    }),
    react()
  ]
});
