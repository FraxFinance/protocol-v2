/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface MockAggregatorRepInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{encode([]: []): string}>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorRep extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorRep;
  attach(addressOrName: string): MockAggregatorRep;
  deployed(): Promise<MockAggregatorRep>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorRep;
  once(event: EventFilter | string, listener: Listener): MockAggregatorRep;
  addListener(eventName: EventFilter | string, listener: Listener): MockAggregatorRep;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorRep;
  removeListener(eventName: any, listener: Listener): MockAggregatorRep;

  interface: MockAggregatorRepInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}
