import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts:
      ['private key'],
      timeout: 3600000
    }
  }
};

export default config;
