require('@nomicfoundation/hardhat-toolbox');
require('hardhat-gas-reporter');
require('./tasks/block-number');
require('dotenv').config();
require('solidity-coverage');
require('@nomicfoundation/hardhat-verify');

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || 'key';
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  'https://eth-sepolia.g.alchemy.com/v2/your-api-key';
const PRIVATE_KEY = process.env.PRIVATE_KEY || 'key';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'key';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: 'http://localhost:8545',
      chainId: 31337,
    },
  },
  solidity: '0.8.8',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
