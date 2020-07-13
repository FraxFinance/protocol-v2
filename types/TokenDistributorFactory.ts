/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from 'ethers';
import {Provider} from 'ethers/providers';
import {UnsignedTransaction} from 'ethers/utils/transaction';

import {TransactionOverrides} from '.';
import {TokenDistributor} from './TokenDistributor';

export class TokenDistributorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<TokenDistributor> {
    return super.deploy(overrides) as Promise<TokenDistributor>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): TokenDistributor {
    return super.attach(address) as TokenDistributor;
  }
  connect(signer: Signer): TokenDistributorFactory {
    return super.connect(signer) as TokenDistributorFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TokenDistributor {
    return new Contract(address, _abi, signerOrProvider) as TokenDistributor;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'percentage',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Distributed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'receivers',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'percentages',
        type: 'uint256[]',
      },
    ],
    name: 'DistributionUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenToBurn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IExchangeAdapter',
        name: 'exchangeAdapter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_recipientBurn',
        type: 'address',
      },
    ],
    name: 'Setup',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DISTRIBUTION_BASE',
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
    name: 'IMPLEMENTATION_REVISION',
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
    name: 'KYBER_ETH_MOCK_ADDRESS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_UINT',
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
    name: 'MAX_UINT_MINUS_ONE',
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
    name: 'MIN_CONVERSION_RATE',
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
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'approveExchange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'distribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]',
      },
    ],
    name: 'distributeWithAmounts',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_percentages',
        type: 'uint256[]',
      },
    ],
    name: 'distributeWithPercentages',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exchangeAdapter',
    outputs: [
      {
        internalType: 'contract IExchangeAdapter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDistribution',
    outputs: [
      {
        internalType: 'address[]',
        name: 'receivers',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'percentages',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipientBurn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenToBurn',
        type: 'address',
      },
      {
        internalType: 'contract IExchangeAdapter',
        name: '_exchangeAdapter',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_receivers',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_percentages',
        type: 'uint256[]',
      },
      {
        internalType: 'contract IERC20[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'recipientBurn',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenToBurn',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x6080604052600060015534801561001557600080fd5b506001600055611a5a8061002a6000396000f3fe6080604052600436106100ec5760003560e01c80634f1b86eb1161008a57806393ed43091161005957806393ed4309146104ff578063cc8cc9d8146105ad578063e5b5019a146106dd578063eed64c30146106f2576100f3565b80634f1b86eb146102525780636138889b146102675780637623bac5146103175780638c0c9a25146104ea576100f3565b8063217ab806116100c6578063217ab806146101e257806323879bb1146102135780632cbcda251461022857806340d58a4a1461023d576100f3565b8063043c41d4146100f8578063135206581461011f5780631cced51b14610134576100f3565b366100f357005b600080fd5b34801561010457600080fd5b5061010d610822565b60408051918252519081900360200190f35b34801561012b57600080fd5b5061010d610828565b34801561014057600080fd5b5061014961082e565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561018d578181015183820152602001610175565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156101cc5781810151838201526020016101b4565b5050505090500194505050505060405180910390f35b3480156101ee57600080fd5b506101f76108eb565b604080516001600160a01b039092168252519081900360200190f35b34801561021f57600080fd5b5061010d6108fa565b34801561023457600080fd5b506101f76108ff565b34801561024957600080fd5b5061010d61090e565b34801561025e57600080fd5b506101f7610913565b34801561027357600080fd5b506103156004803603602081101561028a57600080fd5b810190602081018135600160201b8111156102a457600080fd5b8201836020820111156102b657600080fd5b803590602001918460208302840111600160201b831117156102d757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610922945050505050565b005b34801561032357600080fd5b50610315600480360360c081101561033a57600080fd5b6001600160a01b0382358116926020810135821692604082013590921691810190608081016060820135600160201b81111561037557600080fd5b82018360208201111561038757600080fd5b803590602001918460208302840111600160201b831117156103a857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156103f757600080fd5b82018360208201111561040957600080fd5b803590602001918460208302840111600160201b8311171561042a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561047957600080fd5b82018360208201111561048b57600080fd5b803590602001918460208302840111600160201b831117156104ac57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061099a945050505050565b3480156104f657600080fd5b506101f7610ad9565b34801561050b57600080fd5b506103156004803603602081101561052257600080fd5b810190602081018135600160201b81111561053c57600080fd5b82018360208201111561054e57600080fd5b803590602001918460208302840111600160201b8311171561056f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610af1945050505050565b3480156105b957600080fd5b50610315600480360360408110156105d057600080fd5b810190602081018135600160201b8111156105ea57600080fd5b8201836020820111156105fc57600080fd5b803590602001918460208302840111600160201b8311171561061d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561066c57600080fd5b82018360208201111561067e57600080fd5b803590602001918460208302840111600160201b8311171561069f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c23945050505050565b3480156106e957600080fd5b5061010d610c6c565b3480156106fe57600080fd5b506103156004803603604081101561071557600080fd5b810190602081018135600160201b81111561072f57600080fd5b82018360208201111561074157600080fd5b803590602001918460208302840111600160201b8311171561076257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156107b157600080fd5b8201836020820111156107c357600080fd5b803590602001918460208302840111600160201b831117156107e457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c72945050505050565b60011981565b61271081565b606080603560000180548060200260200160405190810160405280929190818152602001828054801561088a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161086c575b5050505050915060356001018054806020026020016040519081016040528092919081815260200182805480156108e057602002820191906000526020600020905b8154815260200190600101908083116108cc575b505050505090509091565b6038546001600160a01b031681565b600381565b6039546001600160a01b031681565b600181565b6037546001600160a01b031681565b60005b815181101561099657600061095f3084848151811061094057fe5b60200260200101516001600160a01b0316610ced90919063ffffffff16565b90506000811161096f575061098e565b61098c83838151811061097e57fe5b602002602001015182610d99565b505b600101610925565b5050565b60006109a4611115565b60025490915060ff16806109bb57506109bb61111b565b806109c7575060015481115b610a025760405162461bcd60e51b815260040180806020018281038252602e815260200180611994602e913960400191505060405180910390fd5b60025460ff16158015610a23576002805460ff191660019081179091558290555b603880546001600160a01b03808b166001600160a01b031992831617909255603780548a84169083161790556039805492891692909116919091179055610a6a8585611121565b610a7383610af1565b604080516001600160a01b03808a16825280891660208301528a168183015290517f99566d155bc7902033d8db6b0f091f12209d9651abdae3aad004632bd3e657b59181900360600190a18015610acf576002805460ff191690555b5050505050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6039546040516020602482018181528451604484015284516000946001600160a01b0316936393ed430960e01b9387939283926064019180860191028083838b5b83811015610b4a578181015183820152602001610b32565b5050505090500192505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b60208310610bb75780518252601f199092019160209182019101610b98565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610c17576040519150601f19603f3d011682016040523d82523d6000602084013e610c1c565b606091505b5050505050565b60005b8251811015610c6757610c5f838281518110610c3e57fe5b6020026020010151838381518110610c5257fe5b6020026020010151610d99565b600101610c26565b505050565b60001981565b60005b8251811015610c67576000610cc46064610cb8858581518110610c9457fe5b6020026020010151610cac3089888151811061094057fe5b9063ffffffff61127b16565b9063ffffffff6112db16565b905060008111610cd45750610ce5565b610ce384838151811061097e57fe5b505b600101610c75565b6000610cf88361131d565b15610d0e57506001600160a01b03811631610d93565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610d6457600080fd5b505afa158015610d78573d6000803e3d6000fd5b505050506040513d6020811015610d8e57600080fd5b505190505b92915050565b81610da261186e565b604080516035805460606020820284018101855293830181815292939192849290918491840182828015610dff57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610de1575b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610e5757602002820191906000526020600020905b815481526020019060010190808311610e43575b505050505081525050905060008090505b815151811015610c1c576000610ea4612710610cb885602001518581518110610e8d57fe5b60200260200101518861127b90919063ffffffff16565b905080610eb1575061110d565b825180516000919084908110610ec357fe5b60200260200101516001600160a01b031614610f8d57610f0e83600001518381518110610eec57fe5b602002602001015182886001600160a01b03166113429092919063ffffffff16565b7f60ce3cc2d133631eac66a476f14997a9fa682bd05a60dd993cf02285822d78d883600001518381518110610f3f57fe5b602002602001015184602001518481518110610f5757fe5b602090810291909101810151604080516001600160a01b03909416845291830152818101849052519081900360600190a161110b565b60375481906001600160a01b0386811691161461110057603954603754604080516001600160a01b038981166024830152928316604482015260648101869052600a6084808301919091528251808303909101815260a490910182526020810180516001600160e01b0316630ed2fc9560e01b17815291518151600095606095169382918083835b602083106110345780518252601f199092019160209182019101611015565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114611094576040519150601f19603f3d011682016040523d82523d6000602084013e611099565b606091505b5091509150816110e4576040805162461bcd60e51b81526020600482015260116024820152704552524f525f4f4e5f45584348414e474560781b604482015290519081900360640190fd5b8080602001905160208110156110f957600080fd5b5051925050505b6111098161141b565b505b505b600101610e68565b60035b90565b303b1590565b8051825114611177576040805162461bcd60e51b815260206004820152601d60248201527f4172726179206c656e677468732073686f756c6420626520657175616c000000604482015290519081900360640190fd5b604080518082019091528281526020808201839052835160359161119f918391870190611888565b5060208281015180516111b892600185019201906118ed565b509050507fdc9f439f707945ade720b0154668dd64af0689fb88b40abdb0f0289156d23e9d8282604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561122357818101518382015260200161120b565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561126257818101518382015260200161124a565b5050505090500194505050505060405180910390a15050565b60008261128a57506000610d93565b8282028284828161129757fe5b04146112d45760405162461bcd60e51b81526004018080602001828103825260218152602001806119736021913960400191505060405180910390fd5b9392505050565b60006112d483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611511565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14919050565b8061134c57610c67565b6113558361131d565b15611401576040516000906001600160a01b0384169061c35090849084818181858888f193505050503d80600081146113aa576040519150601f19603f3d011682016040523d82523d6000602084013e6113af565b606091505b50509050806113fb576040805162461bcd60e51b815260206004820152601360248201527211551217d514905394d1915497d19052531151606a1b604482015290519081900360640190fd5b50610c67565b610c676001600160a01b038416838363ffffffff6115b316565b6037546038546040805163a9059cbb60e01b81526001600160a01b039283166004820152602481018590529051919092169163a9059cbb9160448083019260209291908290030181600087803b15801561147457600080fd5b505af1158015611488573d6000803e3d6000fd5b505050506040513d602081101561149e57600080fd5b50516114db5760405162461bcd60e51b81526004018080602001828103825260398152602001806119c26039913960400191505060405180910390fd5b6040805182815290517fb90306ad06b2a6ff86ddc9327db583062895ef6540e62dc50add009db5b356eb9181900360200190a150565b6000818361159d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561156257818101518382015260200161154a565b50505050905090810190601f16801561158f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816115a957fe5b0495945050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c679084906060611655826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116b19092919063ffffffff16565b805190915015610c675780806020019051602081101561167457600080fd5b5051610c675760405162461bcd60e51b815260040180806020018281038252602a8152602001806119fb602a913960400191505060405180910390fd5b60606116c084846000856116c8565b949350505050565b60606116d385611835565b611724576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117635780518252601f199092019160209182019101611744565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146117c5576040519150601f19603f3d011682016040523d82523d6000602084013e6117ca565b606091505b509150915081156117de5791506116c09050565b8051156117ee5780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561156257818101518382015260200161154a565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906116c0575050151592915050565b604051806040016040528060608152602001606081525090565b8280548282559060005260206000209081019282156118dd579160200282015b828111156118dd57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906118a8565b506118e9929150611934565b5090565b828054828255906000526020600020908101928215611928579160200282015b8281111561192857825182559160200191906001019061190d565b506118e9929150611958565b61111891905b808211156118e95780546001600160a01b031916815560010161193a565b61111891905b808211156118e9576000815560010161195e56fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564494e5445524e414c5f4255524e2e205265766572746564207472616e7366657220746f20726563697069656e744275726e20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212207cd9645616cc68298bc834ed8be0f446e656d8351a3aa53c0164254e05b3931464736f6c63430006080033';
