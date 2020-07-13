/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface IUniswapExchangeInterface extends Interface {
  functions: {};

  events: {
    AddLiquidity: TypedEventDescription<{
      encodeTopics([provider, eth_amount, token_amount]: [
        string | null,
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;

    EthPurchase: TypedEventDescription<{
      encodeTopics([buyer, tokens_sold, eth_bought]: [
        string | null,
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;

    RemoveLiquidity: TypedEventDescription<{
      encodeTopics([provider, eth_amount, token_amount]: [
        string | null,
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;

    TokenPurchase: TypedEventDescription<{
      encodeTopics([buyer, eth_sold, tokens_bought]: [
        string | null,
        BigNumberish | null,
        BigNumberish | null
      ]): string[];
    }>;
  };
}

export class IUniswapExchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IUniswapExchange;
  attach(addressOrName: string): IUniswapExchange;
  deployed(): Promise<IUniswapExchange>;

  on(event: EventFilter | string, listener: Listener): IUniswapExchange;
  once(event: EventFilter | string, listener: Listener): IUniswapExchange;
  addListener(eventName: EventFilter | string, listener: Listener): IUniswapExchange;
  removeAllListeners(eventName: EventFilter | string): IUniswapExchange;
  removeListener(eventName: any, listener: Listener): IUniswapExchange;

  interface: IUniswapExchangeInterface;

  functions: {};

  filters: {
    AddLiquidity(
      provider: string | null,
      eth_amount: BigNumberish | null,
      token_amount: BigNumberish | null
    ): EventFilter;

    EthPurchase(
      buyer: string | null,
      tokens_sold: BigNumberish | null,
      eth_bought: BigNumberish | null
    ): EventFilter;

    RemoveLiquidity(
      provider: string | null,
      eth_amount: BigNumberish | null,
      token_amount: BigNumberish | null
    ): EventFilter;

    TokenPurchase(
      buyer: string | null,
      eth_sold: BigNumberish | null,
      tokens_bought: BigNumberish | null
    ): EventFilter;
  };

  estimate: {};
}
