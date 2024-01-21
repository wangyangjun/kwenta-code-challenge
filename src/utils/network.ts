import { http, HttpTransport, HttpTransportConfig } from 'viem';

type TransportLoader = (config?: HttpTransportConfig) => HttpTransport;

const loadInfuraTransport: TransportLoader = (config: HttpTransportConfig = {}): HttpTransport => {
  if (!process.env.NEXT_PUBLIC_INFURA_API_KEY) {
    throw new Error('Please define NEXT_PUBLIC_INFURA_API_KEY in your environment');
  }

  return http(`https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`, {
    name: 'Infura HTTP Provider',
    batch: true,
    ...config
  });
};

export const getDefaultTransport = (): HttpTransport => {
  const providerId = process.env.NEXT_PUBLIC_PROVIDER_ID;

  switch (providerId) {
    case 'INFURA':
      return loadInfuraTransport();
    // case: 'OTHER PROVIDER ID':
    default:
      throw new Error('You must define NEXT_PUBLIC_PROVIDER_ID in your environment');
  }
};

const defaultTransport = getDefaultTransport();
export default defaultTransport;
