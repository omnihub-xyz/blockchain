require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const {
  PRIVATE_KEY,
  POLYGON_API_KEY,
  LINEASCAN_API_KEY,
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



    linea_testnet: {
      url: 'https://linea-goerli.blockpi.network/v1/rpc/public',
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      linea: LINEASCAN_API_KEY,
      rari: 'rari_key',
      xai: 'xai_key',
      injective: 'injective_key',
      polygonMumbai: POLYGON_API_KEY,
      linea_testnet: LINEASCAN_API_KEY,
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
      }
    ]
  }
};
