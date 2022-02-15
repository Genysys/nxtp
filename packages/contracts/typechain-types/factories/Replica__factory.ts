/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_processGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldUpdater",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newUpdater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousConfirmAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newConfirmAt",
        type: "uint256",
      },
    ],
    name: "SetConfirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timeout",
        type: "uint256",
      },
    ],
    name: "SetOptimisticTimeout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmAt",
        type: "uint256",
      },
    ],
    name: "setConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "setOptimisticTimeout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum NomadBase.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002665380380620026658339810160408190526200003491620000d9565b63ffffffff8316608052620cf850821015620000865760405162461bcd60e51b815260206004820152600c60248201526b2170726f636573732067617360a01b60448201526064015b60405180910390fd5b613a98811015620000c95760405162461bcd60e51b815260206004820152600c60248201526b21726573657276652067617360a01b60448201526064016200007d565b60a09190915260c052506200011b565b600080600060608486031215620000ef57600080fd5b835163ffffffff811681146200010457600080fd5b602085015160409095015190969495509392505050565b60805160a05160c0516124fe62000167600039600081816101a5015261091b01526000818161036b0152818161093c01526109c301526000818161029a01526107cf01526124fe6000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638d3638f4116100de578063b31c01fb11610097578063df034cd011610071578063df034cd01461038d578063e7e7a7b7146103a0578063f2fde38b146103b3578063ffa1ad74146103c657600080fd5b8063b31c01fb1461033f578063c19d93fb14610352578063d88beda21461036657600080fd5b80638d3638f4146102955780638da5cb5b146102d1578063928bc4b2146102f6578063961681dc146103095780639d54f41914610319578063a3f81d681461032c57600080fd5b806345630b1a1161013057806345630b1a146102365780636188af0e1461023e57806367a6771d14610251578063715018a61461025a57806371bfb7b814610262578063885b5e2d1461028257600080fd5b8063088b5ed31461017857806319d9d21a1461018d57806325e3beda146101a05780632bbd59ca146101da578063371d30711461020a578063399926681461022d575b600080fd5b61018b610186366004611d81565b6103e0565b005b61018b61019b366004611de5565b610469565b6101c77f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101fd6101e8366004611e74565b609a6020526000908152604090205460ff1681565b6040516101d19190611ec1565b61021d610218366004611ee6565b6105cf565b60405190151581526020016101d1565b6101c760975481565b6101c76106ae565b61018b61024c366004611fc1565b6106c8565b6101c760665481565b61018b61071e565b6101c7610270366004611e74565b60996020526000908152604090205481565b61018b610290366004611e74565b610754565b6102bc7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101d1565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016101d1565b61021d61030436600461200a565b6107b9565b6096546102bc9063ffffffff1681565b61018b61032736600461205b565b610b07565b61021d61033a366004611e74565b610b3d565b61018b61034d366004612076565b610b63565b6065546101fd90600160a01b900460ff1681565b6101c77f000000000000000000000000000000000000000000000000000000000000000081565b6065546102de906001600160a01b031681565b61018b6103ae3660046120c6565b610cbe565b61018b6103c136600461205b565b610db2565b6103ce600081565b60405160ff90911681526020016101d1565b6033546001600160a01b031633146104135760405162461bcd60e51b815260040161040a90612113565b60405180910390fd5b60008281526099602090815260409182902080549084905582518181529182018490529184917fe906d465281862f8f37a1bdd7d810e50347f06b0b493701cca6ccb8e6a7b2694910160405180910390a2505050565b6002606554600160a01b900460ff16600281111561048957610489611e8d565b14156104c65760405162461bcd60e51b815260206004820152600c60248201526b6661696c656420737461746560a01b604482015260640161040a565b604080516020601f86018190048102820181019092528481526105089188918835918890889081908401838280828437600092019190915250610e4a92505050565b8015610557575061055786866001602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e4a92505050565b801561056857508435602086013514155b156105c7576105856065805460ff60a01b1916600160a11b179055565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040516105be96959493929190612187565b60405180910390a15b505050505050565b6000806000858152609a602052604090205460ff1660028111156105f5576105f5611e8d565b146106385760405162461bcd60e51b8152602060048201526013602482015272214d6573736167655374617475732e4e6f6e6560681b604482015260640161040a565b600061066e858560208060200260405190810160405280929190826020800280828437600092019190915250879150610ebd9050565b905061067981610b3d565b156106a15750506000838152609a60205260409020805460ff191660019081179091556106a7565b60009150505b9392505050565b6096546000906106c39063ffffffff16610f6f565b905090565b6106da838051906020012083836105cf565b61070f5760405162461bcd60e51b81526020600482015260066024820152652170726f766560d01b604482015260640161040a565b610718836107b9565b50505050565b6033546001600160a01b031633146107485760405162461bcd60e51b815260040161040a90612113565b6107526000610fb8565b565b6033546001600160a01b0316331461077e5760405162461bcd60e51b815260040161040a90612113565b60978190556040518181527fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb49060200160405180910390a150565b6000806107c6838261100a565b905063ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166107fe62ffffff198316611030565b63ffffffff16146108405760405162461bcd60e51b815260206004820152600c60248201526b10b232b9ba34b730ba34b7b760a11b604482015260640161040a565b600061085162ffffff198316611045565b905060016000828152609a602052604090205460ff16600281111561087857610878611e8d565b146108af5760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b604482015260640161040a565b60985460ff166001146108f15760405162461bcd60e51b815260206004820152600a602482015269085c99595b9d1c985b9d60b21b604482015260640161040a565b6098805460ff199081169091556000828152609a60205260409020805490911660021790556109607f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121e1565b5a10156109985760405162461bcd60e51b815260040161040a906020808252600490820152632167617360e01b604082015260600190565b60006109a962ffffff19841661108e565b6040805161010080825261012082019092529192506000917f0000000000000000000000000000000000000000000000000000000000000000908390836020820181803683370190505090506000610a0662ffffff19891661109f565b610a1562ffffff198a166110b3565b610a2462ffffff198b166110c8565b610a41610a3662ffffff198d166110dd565b62ffffff191661110b565b604051602401610a549493929190612251565b60408051601f198184030181529190526020810180516001600160e01b031663ab2dc3f560e01b17815281519192506000918291828a88f198503d945083851115610a9d578394505b848252846000602084013e81604051610ab69190612280565b604051908190038120908a15159089907fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4890600090a450506098805460ff1916600117905550949695505050505050565b6033546001600160a01b03163314610b315760405162461bcd60e51b815260040161040a90612113565b610b3a8161115b565b50565b60008181526099602052604081205480610b5a5750600092915050565b42101592915050565b6002606554600160a01b900460ff166002811115610b8357610b83611e8d565b1415610bc05760405162461bcd60e51b815260206004820152600c60248201526b6661696c656420737461746560a01b604482015260640161040a565b6066548314610c065760405162461bcd60e51b81526020600482015260126024820152716e6f742063757272656e742075706461746560701b604482015260640161040a565b610c11838383610e4a565b610c4c5760405162461bcd60e51b815260206004820152600c60248201526b21757064617465722073696760a01b604482015260640161040a565b609754610c5990426121e1565b6000838152609960205260409081902091909155606683905560965490518391859163ffffffff909116907f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b290610cb190869061229c565b60405180910390a4505050565b600054610100900460ff16610cd95760005460ff1615610cdd565b303b155b610cf95760405162461bcd60e51b815260040161040a906122af565b600054610100900460ff16158015610d1b576000805461ffff19166101011790555b610d24846111bc565b60988054600160ff1990911681179091556096805463ffffffff191663ffffffff88161790556066849055600084815260996020908152604091829020929092556097849055518381527fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb4910160405180910390a18015610dab576000805461ff00191690555b5050505050565b6033546001600160a01b03163314610ddc5760405162461bcd60e51b815260040161040a90612113565b6001600160a01b038116610e415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161040a565b610b3a81610fb8565b600080610e556106ae565b604080516020810192909252810186905260608101859052608001604051602081830303815290604052805190602001209050610e9181611253565b6065549091506001600160a01b0316610eaa828561128e565b6001600160a01b03161495945050505050565b8260005b6020811015610f6757600183821c166000858360208110610ee457610ee4612148565b602002015190508160011415610f25576040805160208101839052908101859052606001604051602081830303815290604052805190602001209350610f52565b60408051602081018690529081018290526060016040516020818303038152906040528051906020012093505b50508080610f5f906122fd565b915050610ec1565b509392505050565b6040516001600160e01b031960e083901b166020820152641393d3505160da1b60248201526000906029015b604051602081830303815290604052805190602001209050919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b81516000906020840161102564ffffffffff851682846112aa565b925050505b92915050565b600061102a62ffffff198316602860046112ee565b60008061105b8360781c6001600160601b031690565b6001600160601b03169050600061107b8460181c6001600160601b031690565b6001600160601b03169091209392505050565b600061102a61109c8361131e565b90565b600061102a62ffffff1983168260046112ee565b600061102a62ffffff198316602460046112ee565b600061102a62ffffff1983166004602061132f565b600061102a604c6110fb81601886901c6001600160601b0316612318565b62ffffff19851691906000611488565b60606000806111238460181c6001600160601b031690565b60405193508392506001600160601b0316905061114a846111458460206121e1565b611503565b508181016020016040529052919050565b606580546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a910160405180910390a15050565b600054610100900460ff166111d75760005460ff16156111db565b303b155b6111f75760405162461bcd60e51b815260040161040a906122af565b600054610100900460ff16158015611219576000805461ffff19166101011790555b611221611665565b61122a8261115b565b6065805460ff60a01b1916600160a01b179055801561124f576000805461ff00191690555b5050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01610f9b565b600080600061129d858561169c565b91509150610f678161170c565b6000806112b784846118c7565b90506040518111156112c7575060005b806112d95762ffffff199150506106a7565b5050606092831b9190911790911b1760181b90565b60006112fb82602061232f565b611306906008612352565b60ff1661131485858561132f565b901c949350505050565b600061102a62ffffff198316602c60205b600060ff8216611341575060006106a7565b6113548460181c6001600160601b031690565b6001600160601b031661136a8460ff85166118c7565b11156113ce576113b56113868560781c6001600160601b031690565b6001600160601b03166113a28660181c6001600160601b031690565b6001600160601b0316858560ff166118d3565b60405162461bcd60e51b815260040161040a919061229c565b60208260ff1611156114485760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161040a565b6008820260006114618660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b60008061149e8660781c6001600160601b031690565b6001600160601b031690506114b286611941565b6114c6856114c084896118c7565b906118c7565b11156114d95762ffffff199150506114fb565b6114e381866118c7565b90506114f78364ffffffffff1682866112aa565b9150505b949350505050565b600062ffffff19808416141561156c5760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b606482015260840161040a565b61157583611982565b6115d55760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b606482015260840161040a565b60006115ea8460181c6001600160601b031690565b6001600160601b03169050600061160a8560781c6001600160601b031690565b6001600160601b03169050600060405190508481111561162a5760206060fd5b8285848460045afa5061165b6116408760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b9695505050505050565b600054610100900460ff1661168c5760405162461bcd60e51b815260040161040a9061237b565b6116946119c0565b6107526119e7565b6000808251604114156116d35760208301516040840151606085015160001a6116c787828585611a17565b94509450505050611705565b8251604014156116fd57602083015160408401516116f2868383611b04565b935093505050611705565b506000905060025b9250929050565b600081600481111561172057611720611e8d565b14156117295750565b600181600481111561173d5761173d611e8d565b141561178b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161040a565b600281600481111561179f5761179f611e8d565b14156117ed5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161040a565b600381600481111561180157611801611e8d565b141561185a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161040a565b600481600481111561186e5761186e611e8d565b1415610b3a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161040a565b60006106a782846121e1565b606060006118e086611b33565b91505060006118ee86611b33565b91505060006118fc86611b33565b915050600061190a86611b33565b9150508383838360405160200161192494939291906123c6565b604051602081830303815290604052945050505050949350505050565b60006119568260181c6001600160601b031690565b6119698360781c6001600160601b031690565b611973919061249d565b6001600160601b031692915050565b600061198e8260d81c90565b64ffffffffff1664ffffffffff14156119a957506000919050565b60006119b483611941565b60405110199392505050565b600054610100900460ff166107525760405162461bcd60e51b815260040161040a9061237b565b600054610100900460ff16611a0e5760405162461bcd60e51b815260040161040a9061237b565b61075233610fb8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a4e5750600090506003611afb565b8460ff16601b14158015611a6657508460ff16601c14155b15611a775750600090506004611afb565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611acb573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611af457600060019250925050611afb565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b01611b2587828885611a17565b935093505050935093915050565b600080601f5b600f8160ff161115611b91576000611b52826008612352565b60ff1685901c9050611b6381611bf3565b61ffff16841793508160ff16601014611b7e57601084901b93505b50611b8a60018261232f565b9050611b39565b50600f5b60ff8160ff161015611bed576000611bae826008612352565b60ff1685901c9050611bbf81611bf3565b61ffff16831792508160ff16600014611bda57601083901b92505b50611be660018261232f565b9050611b95565b50915091565b6000611c0560048360ff16901c611c25565b60ff1661ffff919091161760081b611c1c82611c25565b60ff1617919050565b600060f08083179060ff82161415611c405750603092915050565b8060ff1660f11415611c555750603192915050565b8060ff1660f21415611c6a5750603292915050565b8060ff1660f31415611c7f5750603392915050565b8060ff1660f41415611c945750603492915050565b8060ff1660f51415611ca95750603592915050565b8060ff1660f61415611cbe5750603692915050565b8060ff1660f71415611cd35750603792915050565b8060ff1660f81415611ce85750603892915050565b8060ff1660f91415611cfd5750603992915050565b8060ff1660fa1415611d125750606192915050565b8060ff1660fb1415611d275750606292915050565b8060ff1660fc1415611d3c5750606392915050565b8060ff1660fd1415611d515750606492915050565b8060ff1660fe1415611d665750606592915050565b8060ff1660ff1415611d7b5750606692915050565b50919050565b60008060408385031215611d9457600080fd5b50508035926020909101359150565b60008083601f840112611db557600080fd5b50813567ffffffffffffffff811115611dcd57600080fd5b60208301915083602082850101111561170557600080fd5b60008060008060008060a08789031215611dfe57600080fd5b863595506060870188811115611e1357600080fd5b6020880195503567ffffffffffffffff80821115611e3057600080fd5b611e3c8a838b01611da3565b90965094506080890135915080821115611e5557600080fd5b50611e6289828a01611da3565b979a9699509497509295939492505050565b600060208284031215611e8657600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60038110610b3a57634e487b7160e01b600052602160045260246000fd5b60208101611ece83611ea3565b91905290565b80610400810183101561102a57600080fd5b60008060006104408486031215611efc57600080fd5b83359250611f0d8560208601611ed4565b915061042084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611f4557600080fd5b813567ffffffffffffffff80821115611f6057611f60611f1e565b604051601f8301601f19908116603f01168101908282118183101715611f8857611f88611f1e565b81604052838152866020858801011115611fa157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006104408486031215611fd757600080fd5b833567ffffffffffffffff811115611fee57600080fd5b611ffa86828701611f34565b935050611f0d8560208601611ed4565b60006020828403121561201c57600080fd5b813567ffffffffffffffff81111561203357600080fd5b6114fb84828501611f34565b80356001600160a01b038116811461205657600080fd5b919050565b60006020828403121561206d57600080fd5b6106a78261203f565b60008060006060848603121561208b57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156120b057600080fd5b6120bc86828701611f34565b9150509250925092565b600080600080608085870312156120dc57600080fd5b843563ffffffff811681146120f057600080fd5b93506120fe6020860161203f565b93969395505050506040820135916060013590565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152604086602083013760a0606082018190526000906121ab908301868861215e565b82810360808401526121be81858761215e565b9998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156121f4576121f46121cb565b500190565b60005b838110156122145781810151838201526020016121fc565b838111156107185750506000910152565b6000815180845261223d8160208601602086016121f9565b601f01601f19169290920160200192915050565b600063ffffffff80871683528086166020840152508360408301526080606083015261165b6080830184612225565b600082516122928184602087016121f9565b9190910192915050565b6020815260006106a76020830184612225565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000600019821415612311576123116121cb565b5060010190565b60008282101561232a5761232a6121cb565b500390565b600060ff821660ff841680821015612349576123496121cb565b90039392505050565b600060ff821660ff84168160ff0481118215151615612373576123736121cb565b029392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d820161165b565b60006001600160601b038083168185168083038211156124bf576124bf6121cb565b0194935050505056fea26469706673582212200c93da032fb214256013f6e548ba75604d9c5bca0c0709b1e8509ecedc59c37664736f6c634300080b0033";

type ReplicaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReplicaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Replica__factory extends ContractFactory {
  constructor(...args: ReplicaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Replica";
  }

  deploy(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    ) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    );
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly contractName: "Replica";
  public readonly contractName: "Replica";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}