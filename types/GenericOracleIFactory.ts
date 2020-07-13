/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from 'ethers/providers';

import {GenericOracleI} from './GenericOracleI';

export class GenericOracleIFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): GenericOracleI {
    return new Contract(address, _abi, signerOrProvider) as GenericOracleI;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'AssetPriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'EthPriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_sybil',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: '_sybilProphecy',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: '_oracleProphecy',
        type: 'uint96',
      },
    ],
    name: 'ProphecySubmitted',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'getAssetPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEthUsdPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
