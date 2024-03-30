export const PrestamosDefiABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nuevoCliente",
        type: "address",
      },
    ],
    name: "altaCliente",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nuevoPrestamista",
        type: "address",
      },
    ],
    name: "altaPrestamista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "aprobarPrestamo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositarGarantia",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cliente",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    name: "GarantiaLiquidada",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "liquidarGarantia",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cliente",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    name: "PrestamoAprobado",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cliente",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    name: "PrestamoReembolsado",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "reembolsarPrestamo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "monto_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "plazo_",
        type: "uint256",
      },
    ],
    name: "solicitarPrestamo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cliente",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "plazo",
        type: "uint256",
      },
    ],
    name: "SolicitudPrestamo",
    type: "event",
  },
  {
    inputs: [],
    name: "administrador",
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
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "obtenerDetalleDePrestamo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "prestatario",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "monto",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "plazo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tiempoSolicitud",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tiempoLimite",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "aprobado",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "reembolsado",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "liquidado",
            type: "bool",
          },
        ],
        internalType: "struct PrestamoDeFi.Prestamo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "obtenerGarantia",
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
        internalType: "address",
        name: "prestatario_",
        type: "address",
      },
    ],
    name: "obtenerPrestamosPorPrestatario",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
