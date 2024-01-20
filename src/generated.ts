import { createUseReadContract } from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PerpsV2MarketData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const perpsV2MarketDataAbi = [
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_resolverProxy',
        internalType: 'contract IAddressResolver',
        type: 'address',
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'allMarketSummaries',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketSummary[]',
        type: 'tuple[]',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'asset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSkew', internalType: 'int256', type: 'int256' },
          { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
          {
            name: 'currentFundingRate',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'currentFundingVelocity',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'allProxiedMarketSummaries',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketSummary[]',
        type: 'tuple[]',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'asset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSkew', internalType: 'int256', type: 'int256' },
          { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
          {
            name: 'currentFundingRate',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'currentFundingVelocity',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'globals',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.FuturesGlobals',
        type: 'tuple',
        components: [
          {
            name: 'minInitialMargin',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'liquidationFeeRatio',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'minKeeperFee', internalType: 'uint256', type: 'uint256' },
          { name: 'maxKeeperFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'market',
        internalType: 'contract IPerpsV2MarketViews',
        type: 'address',
      },
    ],
    name: 'marketDetails',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketData',
        type: 'tuple',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'baseAsset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'marketKey', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'limits',
            internalType: 'struct PerpsV2MarketData.MarketLimits',
            type: 'tuple',
            components: [
              { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
              {
                name: 'maxMarketValue',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'fundingParameters',
            internalType: 'struct PerpsV2MarketData.FundingParameters',
            type: 'tuple',
            components: [
              {
                name: 'maxFundingVelocity',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'skewScale', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'marketSizeDetails',
            internalType: 'struct PerpsV2MarketData.MarketSizeDetails',
            type: 'tuple',
            components: [
              { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
              {
                name: 'sides',
                internalType: 'struct PerpsV2MarketData.Sides',
                type: 'tuple',
                components: [
                  { name: 'long', internalType: 'uint256', type: 'uint256' },
                  { name: 'short', internalType: 'uint256', type: 'uint256' },
                ],
              },
              { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
              { name: 'marketSkew', internalType: 'int256', type: 'int256' },
            ],
          },
          {
            name: 'priceDetails',
            internalType: 'struct PerpsV2MarketData.PriceDetails',
            type: 'tuple',
            components: [
              { name: 'price', internalType: 'uint256', type: 'uint256' },
              { name: 'invalid', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'marketKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'marketDetailsForKey',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketData',
        type: 'tuple',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'baseAsset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'marketKey', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'limits',
            internalType: 'struct PerpsV2MarketData.MarketLimits',
            type: 'tuple',
            components: [
              { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
              {
                name: 'maxMarketValue',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          {
            name: 'fundingParameters',
            internalType: 'struct PerpsV2MarketData.FundingParameters',
            type: 'tuple',
            components: [
              {
                name: 'maxFundingVelocity',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'skewScale', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'marketSizeDetails',
            internalType: 'struct PerpsV2MarketData.MarketSizeDetails',
            type: 'tuple',
            components: [
              { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
              {
                name: 'sides',
                internalType: 'struct PerpsV2MarketData.Sides',
                type: 'tuple',
                components: [
                  { name: 'long', internalType: 'uint256', type: 'uint256' },
                  { name: 'short', internalType: 'uint256', type: 'uint256' },
                ],
              },
              { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
              { name: 'marketSkew', internalType: 'int256', type: 'int256' },
            ],
          },
          {
            name: 'priceDetails',
            internalType: 'struct PerpsV2MarketData.PriceDetails',
            type: 'tuple',
            components: [
              { name: 'price', internalType: 'uint256', type: 'uint256' },
              { name: 'invalid', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'markets', internalType: 'address[]', type: 'address[]' }],
    name: 'marketSummaries',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketSummary[]',
        type: 'tuple[]',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'asset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSkew', internalType: 'int256', type: 'int256' },
          { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
          {
            name: 'currentFundingRate',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'currentFundingVelocity',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'marketKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'marketSummariesForKeys',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.MarketSummary[]',
        type: 'tuple[]',
        components: [
          { name: 'market', internalType: 'address', type: 'address' },
          { name: 'asset', internalType: 'bytes32', type: 'bytes32' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSize', internalType: 'uint256', type: 'uint256' },
          { name: 'marketSkew', internalType: 'int256', type: 'int256' },
          { name: 'marketDebt', internalType: 'uint256', type: 'uint256' },
          {
            name: 'currentFundingRate',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'currentFundingVelocity',
            internalType: 'int256',
            type: 'int256',
          },
          {
            name: 'feeRates',
            internalType: 'struct PerpsV2MarketData.FeeRates',
            type: 'tuple',
            components: [
              { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
              { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
              {
                name: 'takerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'takerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'makerFeeOffchainDelayedOrder',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'marketKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'parameters',
    outputs: [
      {
        name: '',
        internalType: 'struct IPerpsV2MarketSettings.Parameters',
        type: 'tuple',
        components: [
          { name: 'takerFee', internalType: 'uint256', type: 'uint256' },
          { name: 'makerFee', internalType: 'uint256', type: 'uint256' },
          {
            name: 'takerFeeDelayedOrder',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'makerFeeDelayedOrder',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'takerFeeOffchainDelayedOrder',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'makerFeeOffchainDelayedOrder',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxLeverage', internalType: 'uint256', type: 'uint256' },
          { name: 'maxMarketValue', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxFundingVelocity',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'skewScale', internalType: 'uint256', type: 'uint256' },
          {
            name: 'nextPriceConfirmWindow',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'delayedOrderConfirmWindow',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'minDelayTimeDelta',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'maxDelayTimeDelta',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'offchainDelayedOrderMinAge',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'offchainDelayedOrderMaxAge',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'offchainMarketKey',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'offchainPriceDivergence',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'liquidationPremiumMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'liquidationBufferRatio',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'maxLiquidationDelta',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'maxPD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'market',
        internalType: 'contract IPerpsV2MarketViews',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'positionDetails',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.PositionData',
        type: 'tuple',
        components: [
          {
            name: 'position',
            internalType: 'struct IPerpsV2MarketBaseTypes.Position',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              {
                name: 'lastFundingIndex',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'margin', internalType: 'uint128', type: 'uint128' },
              { name: 'lastPrice', internalType: 'uint128', type: 'uint128' },
              { name: 'size', internalType: 'int128', type: 'int128' },
            ],
          },
          { name: 'notionalValue', internalType: 'int256', type: 'int256' },
          { name: 'profitLoss', internalType: 'int256', type: 'int256' },
          { name: 'accruedFunding', internalType: 'int256', type: 'int256' },
          { name: 'remainingMargin', internalType: 'uint256', type: 'uint256' },
          {
            name: 'accessibleMargin',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'liquidationPrice',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'canLiquidatePosition', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'marketKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'positionDetailsForMarketKey',
    outputs: [
      {
        name: '',
        internalType: 'struct PerpsV2MarketData.PositionData',
        type: 'tuple',
        components: [
          {
            name: 'position',
            internalType: 'struct IPerpsV2MarketBaseTypes.Position',
            type: 'tuple',
            components: [
              { name: 'id', internalType: 'uint64', type: 'uint64' },
              {
                name: 'lastFundingIndex',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'margin', internalType: 'uint128', type: 'uint128' },
              { name: 'lastPrice', internalType: 'uint128', type: 'uint128' },
              { name: 'size', internalType: 'int128', type: 'int128' },
            ],
          },
          { name: 'notionalValue', internalType: 'int256', type: 'int256' },
          { name: 'profitLoss', internalType: 'int256', type: 'int256' },
          { name: 'accruedFunding', internalType: 'int256', type: 'int256' },
          { name: 'remainingMargin', internalType: 'uint256', type: 'uint256' },
          {
            name: 'accessibleMargin',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'liquidationPrice',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'canLiquidatePosition', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'resolverProxy',
    outputs: [
      { name: '', internalType: 'contract IAddressResolver', type: 'address' },
    ],
  },
] as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const perpsV2MarketDataAddress = {
  10: '0x340B5d664834113735730Ad4aFb3760219Ad9112',
} as const

/**
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const perpsV2MarketDataConfig = {
  address: perpsV2MarketDataAddress,
  abi: perpsV2MarketDataAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketData = /*#__PURE__*/ createUseReadContract({
  abi: perpsV2MarketDataAbi,
  address: perpsV2MarketDataAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"allMarketSummaries"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataAllMarketSummaries =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'allMarketSummaries',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"allProxiedMarketSummaries"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataAllProxiedMarketSummaries =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'allProxiedMarketSummaries',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"globals"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataGlobals =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'globals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"marketDetails"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataMarketDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'marketDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"marketDetailsForKey"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataMarketDetailsForKey =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'marketDetailsForKey',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"marketSummaries"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataMarketSummaries =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'marketSummaries',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"marketSummariesForKeys"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataMarketSummariesForKeys =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'marketSummariesForKeys',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"parameters"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataParameters =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'parameters',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"positionDetails"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataPositionDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'positionDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"positionDetailsForMarketKey"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataPositionDetailsForMarketKey =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'positionDetailsForMarketKey',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link perpsV2MarketDataAbi}__ and `functionName` set to `"resolverProxy"`
 *
 * [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0x340B5d664834113735730Ad4aFb3760219Ad9112)
 */
export const useReadPerpsV2MarketDataResolverProxy =
  /*#__PURE__*/ createUseReadContract({
    abi: perpsV2MarketDataAbi,
    address: perpsV2MarketDataAddress,
    functionName: 'resolverProxy',
  })
