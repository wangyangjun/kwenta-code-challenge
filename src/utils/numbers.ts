import { formatEther } from 'viem';

export const formatPercent = (value: bigint, options?: { minDecimals?: number; maxDecimals?: number }) => {
  let decimals = options?.minDecimals ?? 2;
  if (options?.maxDecimals) {
    decimals = Math.min(decimals, options.maxDecimals);
  }
  if (options?.minDecimals) {
    decimals = Math.max(decimals, options.minDecimals);
  }
  return `${(Number(formatEther(value)) * 100).toFixed(decimals)}%`;
};

export const formatMoney = (
  value: bigint,
  locales: Intl.LocalesArgument = 'en-US',
  options: Intl.NumberFormatOptions = { style: 'currency', currency: 'USD' }
) => {
  return Number(formatEther(value)).toLocaleString(locales, options);
};
