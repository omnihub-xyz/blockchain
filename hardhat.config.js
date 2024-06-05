require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const {
  PRIVATE_KEY,
  POLYGON_API_KEY,
  LINEASCAN_API_KEY,
  SCROLL_API_KEY,
  BLAST_API_KEY,
  BASE_API_KEY,
  OPTIMISM_API_KEY,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    linea: {
      url: 'https://rpc.linea.build',
      accounts: [PRIVATE_KEY],
    },
    scroll: {
      url: 'https://1rpc.io/scroll',
      accounts: [PRIVATE_KEY],
    },
    blast: {
      url: 'https://rpc.blast.io',
      accounts: [PRIVATE_KEY],
    },
    zora: {
      url: 'https://rpc.zora.energy',
      accounts: [PRIVATE_KEY],
    },
    mode: {
      url: 'https://mainnet.mode.network',
      accounts: [PRIVATE_KEY],
    },
    base: {
      url: 'https://mainnet.base.org',
      accounts: [PRIVATE_KEY],
    },
    optimism: {
      url: 'https://mainnet.optimism.io',
      accounts: [PRIVATE_KEY],
    },
    rari: {
      url: 'https://mainnet.rpc.rarichain.org/http',
      accounts: [PRIVATE_KEY],
    },
    xai: {
      url: 'https://xai-chain.net/rpc',
      accounts: [PRIVATE_KEY],
    },
    injective: {
      url: 'https://inevm.calderachain.xyz/http',
      accounts: [PRIVATE_KEY],
    },
    zetachain: {
      url: 'https://zetachain-evm.blockpi.network/v1/rpc/public',
      accounts: [PRIVATE_KEY],
    },
    merlin: {
      url: 'https://rpc.merlinchain.io',
      accounts: [PRIVATE_KEY],
    },
    zklink: {
      url: 'https://rpc.zklink.io',
      accounts: [PRIVATE_KEY],
    },
    pulse: {
      url: 'https://rpc.pulsechain.com',
      accounts: [PRIVATE_KEY],
    },
    arbitrum: {
      url: 'https://1rpc.io/arb',
      accounts: [PRIVATE_KEY],
    },
    'arbitrum-nova': {
      url: 'https://nova.arbitrum.io/rpc',
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: 'https://1rpc.io/matic',
      accounts: [PRIVATE_KEY],
    },
    taiko: {
      url: 'https://rpc.taiko.xyz',
      accounts: [PRIVATE_KEY],
    },
    mint: {
      url: 'https://rpc.mintchain.io',
      accounts: [PRIVATE_KEY],
    },
    linea_testnet: {
      url: 'https://linea-goerli.blockpi.network/v1/rpc/public',
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      linea: LINEASCAN_API_KEY,
      polygonMumbai: POLYGON_API_KEY,
      linea_testnet: LINEASCAN_API_KEY,
      scroll: SCROLL_API_KEY,
      blast: BLAST_API_KEY,
      base: BASE_API_KEY,
      optimism: OPTIMISM_API_KEY,
      rari: '-',
      xai: '-',
      injective: '-',
      zora: '-',
      mode: '-',
      zetachain: '-',
      viction: '-',
    },
    customChains: [
      {
        network: "linea",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build/"
        }
      },
      {
        network: "rari",
        chainId: 1380012617,
        urls: {
          apiURL: "https://mainnet.explorer.rarichain.org/api",
          browserURL: "https://mainnet.explorer.rarichain.org"
        }
      },
      {
        network: "linea_testnet",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/"
        }
      },
      {
        network: "xai",
        chainId: 660279,
        urls: {
          apiURL: "https://explorer.xai-chain.net/api",
          browserURL: "https://explorer.xai-chain.net"
        }
      },

      {
        network: "injective",
        chainId: 2525,
        urls: {
          apiURL: "https://explorer.inevm.com/api",
          browserURL: "https://explorer.inevm.com/",
        },
      },
      {
        network: "scroll",
        chainId: 534352,
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com/"
        }
      },
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: "https://blastscan.io"
        }
      },
      {
        network: "zora",
        chainId: 7777777,
        urls: {
          apiURL: "https://explorer.zora.energy/api",
          browserURL: "https://explorer.zora.energy"
        }
      },
      {
        network: "mode",
        chainId: 34443,
        urls: {
          apiURL: "https://explorer.mode.network/api",
          browserURL: "https://explorer.mode.network"
        }
      },
      {
        network: "optimism",
        chainId: 10,
        urls: {
          apiURL: "https://api-optimistic.etherscan.io/api",
          browserURL: "https://optimistic.etherscan.io/"
        }
      },
      {
        network: "zetachain",
        chainId: 7000,
        urls: {
          apiURL: "https://api-zetachain.blockscout.com/api",
          browserURL: "https://zetachain.blockscout.com/"
        }
      },
    ]
  }
};
