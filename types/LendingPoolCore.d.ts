/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface LendingPoolCoreInterface extends Interface {
  functions: {
    activateReserve: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    addressesProvider: TypedFunctionDescription<{encode([]: []): string}>;

    deactivateReserve: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    disableBorrowingOnReserve: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    disableReserveAsCollateral: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    disableReserveStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    enableBorrowingOnReserve: TypedFunctionDescription<{
      encode([_reserve, _stableBorrowRateEnabled]: [string, boolean]): string;
    }>;

    enableReserveAsCollateral: TypedFunctionDescription<{
      encode([_reserve, _baseLTVasCollateral, _liquidationThreshold, _liquidationBonus]: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    enableReserveStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    freezeReserve: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveATokenAddress: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveAvailableLiquidity: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveConfiguration: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveCurrentAverageStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveCurrentLiquidityRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveCurrentStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveCurrentVariableBorrowRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveDecimals: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveInterestRateStrategyAddress: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveIsActive: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveIsFreezed: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveIsStableBorrowRateEnabled: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveLastUpdate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveLiquidationBonus: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveLiquidationThreshold: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveLiquidityCumulativeIndex: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveNormalizedIncome: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveTotalBorrows: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveTotalBorrowsStable: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveTotalBorrowsVariable: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveTotalLiquidity: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveUtilizationRate: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserveVariableBorrowsCumulativeIndex: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    getReserves: TypedFunctionDescription<{encode([]: []): string}>;

    getUserBasicReserveData: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserBorrowBalances: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserCurrentBorrowRateMode: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserCurrentStableBorrowRate: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserLastUpdate: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserOriginationFee: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserUnderlyingAssetBalance: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    getUserVariableBorrowCumulativeIndex: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    initReserve: TypedFunctionDescription<{
      encode([_reserve, _aTokenAddress, _decimals, _interestRateStrategyAddress]: [
        string,
        string,
        BigNumberish,
        string
      ]): string;
    }>;

    initialize: TypedFunctionDescription<{
      encode([_addressesProvider]: [string]): string;
    }>;

    isReserveBorrowingEnabled: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    isReserveUsageAsCollateralEnabled: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    isUserAllowedToBorrowAtStable: TypedFunctionDescription<{
      encode([_reserve, _user, _amount]: [string, string, BigNumberish]): string;
    }>;

    isUserUseReserveAsCollateralEnabled: TypedFunctionDescription<{
      encode([_reserve, _user]: [string, string]): string;
    }>;

    lendingPoolAddress: TypedFunctionDescription<{encode([]: []): string}>;

    liquidateFee: TypedFunctionDescription<{
      encode([_token, _amount, _destination]: [string, BigNumberish, string]): string;
    }>;

    refreshConfiguration: TypedFunctionDescription<{encode([]: []): string}>;

    removeLastAddedReserve: TypedFunctionDescription<{
      encode([_reserveToRemove]: [string]): string;
    }>;

    reservesList: TypedFunctionDescription<{
      encode([]: [BigNumberish]): string;
    }>;

    setReserveBaseLTVasCollateral: TypedFunctionDescription<{
      encode([_reserve, _ltv]: [string, BigNumberish]): string;
    }>;

    setReserveDecimals: TypedFunctionDescription<{
      encode([_reserve, _decimals]: [string, BigNumberish]): string;
    }>;

    setReserveInterestRateStrategyAddress: TypedFunctionDescription<{
      encode([_reserve, _rateStrategyAddress]: [string, string]): string;
    }>;

    setReserveLiquidationBonus: TypedFunctionDescription<{
      encode([_reserve, _bonus]: [string, BigNumberish]): string;
    }>;

    setReserveLiquidationThreshold: TypedFunctionDescription<{
      encode([_reserve, _threshold]: [string, BigNumberish]): string;
    }>;

    setUserUseReserveAsCollateral: TypedFunctionDescription<{
      encode([_reserve, _user, _useAsCollateral]: [string, string, boolean]): string;
    }>;

    transferToFeeCollectionAddress: TypedFunctionDescription<{
      encode([_token, _user, _amount, _destination]: [
        string,
        string,
        BigNumberish,
        string
      ]): string;
    }>;

    transferToReserve: TypedFunctionDescription<{
      encode([_reserve, _user, _amount]: [string, string, BigNumberish]): string;
    }>;

    transferToUser: TypedFunctionDescription<{
      encode([_reserve, _user, _amount]: [string, string, BigNumberish]): string;
    }>;

    unfreezeReserve: TypedFunctionDescription<{
      encode([_reserve]: [string]): string;
    }>;

    updateStateOnBorrow: TypedFunctionDescription<{
      encode([_reserve, _user, _amountBorrowed, _borrowFee, _rateMode]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    updateStateOnDeposit: TypedFunctionDescription<{
      encode([_reserve, _user, _amount, _isFirstDeposit]: [
        string,
        string,
        BigNumberish,
        boolean
      ]): string;
    }>;

    updateStateOnFlashLoan: TypedFunctionDescription<{
      encode([_reserve, _availableLiquidityBefore, _income, _protocolFee]: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    updateStateOnLiquidation: TypedFunctionDescription<{
      encode([
        _principalReserve,
        _collateralReserve,
        _user,
        _amountToLiquidate,
        _collateralToLiquidate,
        _feeLiquidated,
        _liquidatedCollateralForFee,
        _balanceIncrease,
        _liquidatorReceivesAToken,
      ]: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        boolean
      ]): string;
    }>;

    updateStateOnRebalance: TypedFunctionDescription<{
      encode([_reserve, _user, _balanceIncrease]: [string, string, BigNumberish]): string;
    }>;

    updateStateOnRedeem: TypedFunctionDescription<{
      encode([_reserve, _user, _amountRedeemed, _userRedeemedEverything]: [
        string,
        string,
        BigNumberish,
        boolean
      ]): string;
    }>;

    updateStateOnRepay: TypedFunctionDescription<{
      encode([
        _reserve,
        _user,
        _paybackAmountMinusFees,
        _originationFeeRepaid,
        _balanceIncrease,
        _repaidWholeLoan,
      ]: [string, string, BigNumberish, BigNumberish, BigNumberish, boolean]): string;
    }>;

    updateStateOnSwapRate: TypedFunctionDescription<{
      encode([
        _reserve,
        _user,
        _principalBorrowBalance,
        _compoundedBorrowBalance,
        _balanceIncrease,
        _currentRateMode,
      ]: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    }>;
  };

  events: {
    ReserveDataUpdated: TypedEventDescription<{
      encodeTopics([
        reserve,
        liquidityRate,
        stableBorrowRate,
        averageStableBorrowRate,
        variableBorrowRate,
        liquidityIndex,
        variableBorrowIndex,
      ]: [string | null, null, null, null, null, null, null]): string[];
    }>;

    ReserveUpdated: TypedEventDescription<{
      encodeTopics([
        reserve,
        liquidityRate,
        stableBorrowRate,
        variableBorrowRate,
        liquidityIndex,
        variableBorrowIndex,
      ]: [string | null, null, null, null, null, null]): string[];
    }>;
  };
}

export class LendingPoolCore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LendingPoolCore;
  attach(addressOrName: string): LendingPoolCore;
  deployed(): Promise<LendingPoolCore>;

  on(event: EventFilter | string, listener: Listener): LendingPoolCore;
  once(event: EventFilter | string, listener: Listener): LendingPoolCore;
  addListener(eventName: EventFilter | string, listener: Listener): LendingPoolCore;
  removeAllListeners(eventName: EventFilter | string): LendingPoolCore;
  removeListener(eventName: any, listener: Listener): LendingPoolCore;

  interface: LendingPoolCoreInterface;

  functions: {
    activateReserve(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addressesProvider(): Promise<string>;

    deactivateReserve(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    disableBorrowingOnReserve(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    disableReserveAsCollateral(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    disableReserveStableBorrowRate(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enableReserveStableBorrowRate(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    freezeReserve(_reserve: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;

    getReserveATokenAddress(_reserve: string): Promise<string>;

    getReserveAvailableLiquidity(_reserve: string): Promise<BigNumber>;

    getReserveConfiguration(
      _reserve: string
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    getReserveCurrentAverageStableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentLiquidityRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentStableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentVariableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveDecimals(_reserve: string): Promise<BigNumber>;

    getReserveInterestRateStrategyAddress(_reserve: string): Promise<string>;

    getReserveIsActive(_reserve: string): Promise<boolean>;

    getReserveIsFreezed(_reserve: string): Promise<boolean>;

    getReserveIsStableBorrowRateEnabled(_reserve: string): Promise<boolean>;

    getReserveLastUpdate(_reserve: string): Promise<number>;

    getReserveLiquidationBonus(_reserve: string): Promise<BigNumber>;

    getReserveLiquidationThreshold(_reserve: string): Promise<BigNumber>;

    getReserveLiquidityCumulativeIndex(_reserve: string): Promise<BigNumber>;

    getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrows(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrowsStable(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrowsVariable(_reserve: string): Promise<BigNumber>;

    getReserveTotalLiquidity(_reserve: string): Promise<BigNumber>;

    getReserveUtilizationRate(_reserve: string): Promise<BigNumber>;

    getReserveVariableBorrowsCumulativeIndex(_reserve: string): Promise<BigNumber>;

    getReserves(): Promise<string[]>;

    getUserBasicReserveData(
      _reserve: string,
      _user: string
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
    }>;

    getUserBorrowBalances(
      _reserve: string,
      _user: string
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    getUserCurrentBorrowRateMode(_reserve: string, _user: string): Promise<number>;

    getUserCurrentStableBorrowRate(_reserve: string, _user: string): Promise<BigNumber>;

    getUserLastUpdate(_reserve: string, _user: string): Promise<BigNumber>;

    getUserOriginationFee(_reserve: string, _user: string): Promise<BigNumber>;

    getUserUnderlyingAssetBalance(_reserve: string, _user: string): Promise<BigNumber>;

    getUserVariableBorrowCumulativeIndex(_reserve: string, _user: string): Promise<BigNumber>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _decimals: BigNumberish,
      _interestRateStrategyAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialize(
      _addressesProvider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isReserveBorrowingEnabled(_reserve: string): Promise<boolean>;

    isReserveUsageAsCollateralEnabled(_reserve: string): Promise<boolean>;

    isUserAllowedToBorrowAtStable(
      _reserve: string,
      _user: string,
      _amount: BigNumberish
    ): Promise<boolean>;

    isUserUseReserveAsCollateralEnabled(_reserve: string, _user: string): Promise<boolean>;

    lendingPoolAddress(): Promise<string>;

    liquidateFee(
      _token: string,
      _amount: BigNumberish,
      _destination: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    refreshConfiguration(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    removeLastAddedReserve(
      _reserveToRemove: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    reservesList(arg0: BigNumberish): Promise<string>;

    setReserveBaseLTVasCollateral(
      _reserve: string,
      _ltv: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveDecimals(
      _reserve: string,
      _decimals: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveLiquidationBonus(
      _reserve: string,
      _bonus: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setReserveLiquidationThreshold(
      _reserve: string,
      _threshold: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _user: string,
      _useAsCollateral: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferToFeeCollectionAddress(
      _token: string,
      _user: string,
      _amount: BigNumberish,
      _destination: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferToReserve(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferToUser(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unfreezeReserve(
      _reserve: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnBorrow(
      _reserve: string,
      _user: string,
      _amountBorrowed: BigNumberish,
      _borrowFee: BigNumberish,
      _rateMode: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnDeposit(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      _isFirstDeposit: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnFlashLoan(
      _reserve: string,
      _availableLiquidityBefore: BigNumberish,
      _income: BigNumberish,
      _protocolFee: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnLiquidation(
      _principalReserve: string,
      _collateralReserve: string,
      _user: string,
      _amountToLiquidate: BigNumberish,
      _collateralToLiquidate: BigNumberish,
      _feeLiquidated: BigNumberish,
      _liquidatedCollateralForFee: BigNumberish,
      _balanceIncrease: BigNumberish,
      _liquidatorReceivesAToken: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnRebalance(
      _reserve: string,
      _user: string,
      _balanceIncrease: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnRedeem(
      _reserve: string,
      _user: string,
      _amountRedeemed: BigNumberish,
      _userRedeemedEverything: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnRepay(
      _reserve: string,
      _user: string,
      _paybackAmountMinusFees: BigNumberish,
      _originationFeeRepaid: BigNumberish,
      _balanceIncrease: BigNumberish,
      _repaidWholeLoan: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateStateOnSwapRate(
      _reserve: string,
      _user: string,
      _principalBorrowBalance: BigNumberish,
      _compoundedBorrowBalance: BigNumberish,
      _balanceIncrease: BigNumberish,
      _currentRateMode: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  activateReserve(_reserve: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;

  addressesProvider(): Promise<string>;

  deactivateReserve(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  disableBorrowingOnReserve(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  disableReserveAsCollateral(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  disableReserveStableBorrowRate(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableBorrowingOnReserve(
    _reserve: string,
    _stableBorrowRateEnabled: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableReserveAsCollateral(
    _reserve: string,
    _baseLTVasCollateral: BigNumberish,
    _liquidationThreshold: BigNumberish,
    _liquidationBonus: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enableReserveStableBorrowRate(
    _reserve: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  freezeReserve(_reserve: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;

  getReserveATokenAddress(_reserve: string): Promise<string>;

  getReserveAvailableLiquidity(_reserve: string): Promise<BigNumber>;

  getReserveConfiguration(
    _reserve: string
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  getReserveCurrentAverageStableBorrowRate(_reserve: string): Promise<BigNumber>;

  getReserveCurrentLiquidityRate(_reserve: string): Promise<BigNumber>;

  getReserveCurrentStableBorrowRate(_reserve: string): Promise<BigNumber>;

  getReserveCurrentVariableBorrowRate(_reserve: string): Promise<BigNumber>;

  getReserveDecimals(_reserve: string): Promise<BigNumber>;

  getReserveInterestRateStrategyAddress(_reserve: string): Promise<string>;

  getReserveIsActive(_reserve: string): Promise<boolean>;

  getReserveIsFreezed(_reserve: string): Promise<boolean>;

  getReserveIsStableBorrowRateEnabled(_reserve: string): Promise<boolean>;

  getReserveLastUpdate(_reserve: string): Promise<number>;

  getReserveLiquidationBonus(_reserve: string): Promise<BigNumber>;

  getReserveLiquidationThreshold(_reserve: string): Promise<BigNumber>;

  getReserveLiquidityCumulativeIndex(_reserve: string): Promise<BigNumber>;

  getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

  getReserveTotalBorrows(_reserve: string): Promise<BigNumber>;

  getReserveTotalBorrowsStable(_reserve: string): Promise<BigNumber>;

  getReserveTotalBorrowsVariable(_reserve: string): Promise<BigNumber>;

  getReserveTotalLiquidity(_reserve: string): Promise<BigNumber>;

  getReserveUtilizationRate(_reserve: string): Promise<BigNumber>;

  getReserveVariableBorrowsCumulativeIndex(_reserve: string): Promise<BigNumber>;

  getReserves(): Promise<string[]>;

  getUserBasicReserveData(
    _reserve: string,
    _user: string
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
  }>;

  getUserBorrowBalances(
    _reserve: string,
    _user: string
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  getUserCurrentBorrowRateMode(_reserve: string, _user: string): Promise<number>;

  getUserCurrentStableBorrowRate(_reserve: string, _user: string): Promise<BigNumber>;

  getUserLastUpdate(_reserve: string, _user: string): Promise<BigNumber>;

  getUserOriginationFee(_reserve: string, _user: string): Promise<BigNumber>;

  getUserUnderlyingAssetBalance(_reserve: string, _user: string): Promise<BigNumber>;

  getUserVariableBorrowCumulativeIndex(_reserve: string, _user: string): Promise<BigNumber>;

  initReserve(
    _reserve: string,
    _aTokenAddress: string,
    _decimals: BigNumberish,
    _interestRateStrategyAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initialize(
    _addressesProvider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isReserveBorrowingEnabled(_reserve: string): Promise<boolean>;

  isReserveUsageAsCollateralEnabled(_reserve: string): Promise<boolean>;

  isUserAllowedToBorrowAtStable(
    _reserve: string,
    _user: string,
    _amount: BigNumberish
  ): Promise<boolean>;

  isUserUseReserveAsCollateralEnabled(_reserve: string, _user: string): Promise<boolean>;

  lendingPoolAddress(): Promise<string>;

  liquidateFee(
    _token: string,
    _amount: BigNumberish,
    _destination: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  refreshConfiguration(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  removeLastAddedReserve(
    _reserveToRemove: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  reservesList(arg0: BigNumberish): Promise<string>;

  setReserveBaseLTVasCollateral(
    _reserve: string,
    _ltv: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveDecimals(
    _reserve: string,
    _decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveInterestRateStrategyAddress(
    _reserve: string,
    _rateStrategyAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveLiquidationBonus(
    _reserve: string,
    _bonus: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setReserveLiquidationThreshold(
    _reserve: string,
    _threshold: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setUserUseReserveAsCollateral(
    _reserve: string,
    _user: string,
    _useAsCollateral: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferToFeeCollectionAddress(
    _token: string,
    _user: string,
    _amount: BigNumberish,
    _destination: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferToReserve(
    _reserve: string,
    _user: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferToUser(
    _reserve: string,
    _user: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unfreezeReserve(_reserve: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;

  updateStateOnBorrow(
    _reserve: string,
    _user: string,
    _amountBorrowed: BigNumberish,
    _borrowFee: BigNumberish,
    _rateMode: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnDeposit(
    _reserve: string,
    _user: string,
    _amount: BigNumberish,
    _isFirstDeposit: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnFlashLoan(
    _reserve: string,
    _availableLiquidityBefore: BigNumberish,
    _income: BigNumberish,
    _protocolFee: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnLiquidation(
    _principalReserve: string,
    _collateralReserve: string,
    _user: string,
    _amountToLiquidate: BigNumberish,
    _collateralToLiquidate: BigNumberish,
    _feeLiquidated: BigNumberish,
    _liquidatedCollateralForFee: BigNumberish,
    _balanceIncrease: BigNumberish,
    _liquidatorReceivesAToken: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnRebalance(
    _reserve: string,
    _user: string,
    _balanceIncrease: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnRedeem(
    _reserve: string,
    _user: string,
    _amountRedeemed: BigNumberish,
    _userRedeemedEverything: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnRepay(
    _reserve: string,
    _user: string,
    _paybackAmountMinusFees: BigNumberish,
    _originationFeeRepaid: BigNumberish,
    _balanceIncrease: BigNumberish,
    _repaidWholeLoan: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateStateOnSwapRate(
    _reserve: string,
    _user: string,
    _principalBorrowBalance: BigNumberish,
    _compoundedBorrowBalance: BigNumberish,
    _balanceIncrease: BigNumberish,
    _currentRateMode: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ReserveDataUpdated(
      reserve: string | null,
      liquidityRate: null,
      stableBorrowRate: null,
      averageStableBorrowRate: null,
      variableBorrowRate: null,
      liquidityIndex: null,
      variableBorrowIndex: null
    ): EventFilter;

    ReserveUpdated(
      reserve: string | null,
      liquidityRate: null,
      stableBorrowRate: null,
      variableBorrowRate: null,
      liquidityIndex: null,
      variableBorrowIndex: null
    ): EventFilter;
  };

  estimate: {
    activateReserve(_reserve: string): Promise<BigNumber>;

    addressesProvider(): Promise<BigNumber>;

    deactivateReserve(_reserve: string): Promise<BigNumber>;

    disableBorrowingOnReserve(_reserve: string): Promise<BigNumber>;

    disableReserveAsCollateral(_reserve: string): Promise<BigNumber>;

    disableReserveStableBorrowRate(_reserve: string): Promise<BigNumber>;

    enableBorrowingOnReserve(
      _reserve: string,
      _stableBorrowRateEnabled: boolean
    ): Promise<BigNumber>;

    enableReserveAsCollateral(
      _reserve: string,
      _baseLTVasCollateral: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish
    ): Promise<BigNumber>;

    enableReserveStableBorrowRate(_reserve: string): Promise<BigNumber>;

    freezeReserve(_reserve: string): Promise<BigNumber>;

    getReserveATokenAddress(_reserve: string): Promise<BigNumber>;

    getReserveAvailableLiquidity(_reserve: string): Promise<BigNumber>;

    getReserveConfiguration(_reserve: string): Promise<BigNumber>;

    getReserveCurrentAverageStableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentLiquidityRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentStableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveCurrentVariableBorrowRate(_reserve: string): Promise<BigNumber>;

    getReserveDecimals(_reserve: string): Promise<BigNumber>;

    getReserveInterestRateStrategyAddress(_reserve: string): Promise<BigNumber>;

    getReserveIsActive(_reserve: string): Promise<BigNumber>;

    getReserveIsFreezed(_reserve: string): Promise<BigNumber>;

    getReserveIsStableBorrowRateEnabled(_reserve: string): Promise<BigNumber>;

    getReserveLastUpdate(_reserve: string): Promise<BigNumber>;

    getReserveLiquidationBonus(_reserve: string): Promise<BigNumber>;

    getReserveLiquidationThreshold(_reserve: string): Promise<BigNumber>;

    getReserveLiquidityCumulativeIndex(_reserve: string): Promise<BigNumber>;

    getReserveNormalizedIncome(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrows(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrowsStable(_reserve: string): Promise<BigNumber>;

    getReserveTotalBorrowsVariable(_reserve: string): Promise<BigNumber>;

    getReserveTotalLiquidity(_reserve: string): Promise<BigNumber>;

    getReserveUtilizationRate(_reserve: string): Promise<BigNumber>;

    getReserveVariableBorrowsCumulativeIndex(_reserve: string): Promise<BigNumber>;

    getReserves(): Promise<BigNumber>;

    getUserBasicReserveData(_reserve: string, _user: string): Promise<BigNumber>;

    getUserBorrowBalances(_reserve: string, _user: string): Promise<BigNumber>;

    getUserCurrentBorrowRateMode(_reserve: string, _user: string): Promise<BigNumber>;

    getUserCurrentStableBorrowRate(_reserve: string, _user: string): Promise<BigNumber>;

    getUserLastUpdate(_reserve: string, _user: string): Promise<BigNumber>;

    getUserOriginationFee(_reserve: string, _user: string): Promise<BigNumber>;

    getUserUnderlyingAssetBalance(_reserve: string, _user: string): Promise<BigNumber>;

    getUserVariableBorrowCumulativeIndex(_reserve: string, _user: string): Promise<BigNumber>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _decimals: BigNumberish,
      _interestRateStrategyAddress: string
    ): Promise<BigNumber>;

    initialize(_addressesProvider: string): Promise<BigNumber>;

    isReserveBorrowingEnabled(_reserve: string): Promise<BigNumber>;

    isReserveUsageAsCollateralEnabled(_reserve: string): Promise<BigNumber>;

    isUserAllowedToBorrowAtStable(
      _reserve: string,
      _user: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    isUserUseReserveAsCollateralEnabled(_reserve: string, _user: string): Promise<BigNumber>;

    lendingPoolAddress(): Promise<BigNumber>;

    liquidateFee(_token: string, _amount: BigNumberish, _destination: string): Promise<BigNumber>;

    refreshConfiguration(): Promise<BigNumber>;

    removeLastAddedReserve(_reserveToRemove: string): Promise<BigNumber>;

    reservesList(arg0: BigNumberish): Promise<BigNumber>;

    setReserveBaseLTVasCollateral(_reserve: string, _ltv: BigNumberish): Promise<BigNumber>;

    setReserveDecimals(_reserve: string, _decimals: BigNumberish): Promise<BigNumber>;

    setReserveInterestRateStrategyAddress(
      _reserve: string,
      _rateStrategyAddress: string
    ): Promise<BigNumber>;

    setReserveLiquidationBonus(_reserve: string, _bonus: BigNumberish): Promise<BigNumber>;

    setReserveLiquidationThreshold(_reserve: string, _threshold: BigNumberish): Promise<BigNumber>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _user: string,
      _useAsCollateral: boolean
    ): Promise<BigNumber>;

    transferToFeeCollectionAddress(
      _token: string,
      _user: string,
      _amount: BigNumberish,
      _destination: string
    ): Promise<BigNumber>;

    transferToReserve(_reserve: string, _user: string, _amount: BigNumberish): Promise<BigNumber>;

    transferToUser(_reserve: string, _user: string, _amount: BigNumberish): Promise<BigNumber>;

    unfreezeReserve(_reserve: string): Promise<BigNumber>;

    updateStateOnBorrow(
      _reserve: string,
      _user: string,
      _amountBorrowed: BigNumberish,
      _borrowFee: BigNumberish,
      _rateMode: BigNumberish
    ): Promise<BigNumber>;

    updateStateOnDeposit(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      _isFirstDeposit: boolean
    ): Promise<BigNumber>;

    updateStateOnFlashLoan(
      _reserve: string,
      _availableLiquidityBefore: BigNumberish,
      _income: BigNumberish,
      _protocolFee: BigNumberish
    ): Promise<BigNumber>;

    updateStateOnLiquidation(
      _principalReserve: string,
      _collateralReserve: string,
      _user: string,
      _amountToLiquidate: BigNumberish,
      _collateralToLiquidate: BigNumberish,
      _feeLiquidated: BigNumberish,
      _liquidatedCollateralForFee: BigNumberish,
      _balanceIncrease: BigNumberish,
      _liquidatorReceivesAToken: boolean
    ): Promise<BigNumber>;

    updateStateOnRebalance(
      _reserve: string,
      _user: string,
      _balanceIncrease: BigNumberish
    ): Promise<BigNumber>;

    updateStateOnRedeem(
      _reserve: string,
      _user: string,
      _amountRedeemed: BigNumberish,
      _userRedeemedEverything: boolean
    ): Promise<BigNumber>;

    updateStateOnRepay(
      _reserve: string,
      _user: string,
      _paybackAmountMinusFees: BigNumberish,
      _originationFeeRepaid: BigNumberish,
      _balanceIncrease: BigNumberish,
      _repaidWholeLoan: boolean
    ): Promise<BigNumber>;

    updateStateOnSwapRate(
      _reserve: string,
      _user: string,
      _principalBorrowBalance: BigNumberish,
      _compoundedBorrowBalance: BigNumberish,
      _balanceIncrease: BigNumberish,
      _currentRateMode: BigNumberish
    ): Promise<BigNumber>;
  };
}
