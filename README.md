## Getting Started

Setup:

`npm install`

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development task

Display a list of Synthetix perps markets.

- Pull the markets information from the Optimism PerpsV2MarketData contract at address: `0x340B5d664834113735730Ad4aFb3760219Ad9112`
- Render a list of all the perps markets
- Display the market name, market size in $, current price and maker / taker fee (delayed off chain)
- The list of markets should be ordered by market size
- You should make use of styled-components

[Figma File](https://www.figma.com/file/zxzYWNqKSnjGSnXd5tYIDN/Markets-List?type=design&node-id=0%3A1&t=iM2wd9Y4mCMPJ7H7-1)

![Design](public/markets-list.png)

## Environment Variables

Create file `.env.local`

```bash
cp .env.local.example .env.local
```

- `OPTIMISTIC_ETHERSCAN_API_KEY`
  - API key of optimistic etherscan, which could be created at https://optimistic.etherscan.io/myapikey
- `NEXT_PUBLIC_PROVIDER_ID`
  - INFURA or BLAST_API or other provider id
  - if you choose other provider, please update correpsonding code in `src/utils/network.ts`
- `NEXT_PUBLIC_INFURA_API_KEY`
  - API key of Infura PRC provider, which could be created at https://app.infura.io/

## ABI Management

This project use Wagmi CLI for managing ABIs and generating React Hooks. The generated file(`src/generated.ts`) is already added in the repository. If more contracts needed to be added in the project, please following steps:

- updating configure file `wagmi.config.ts`
- run command `npm run generate`

## Demo

The project is deployed to vercel, which could be access here - https://kwenta-code-challenge.vercel.app
