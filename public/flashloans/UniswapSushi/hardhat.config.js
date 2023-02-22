require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/cQ2Bb9ZudvJZUA0TjgzVYUOHfgrkYpa8",
      },
    },
    testnet: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/msz7murQ32cXtxS2vPeD4yrLeXiUvNBh",
      chainId: 4,
      accounts: [
        "0x_WALLET_PRIVATE_KEY",
      ],
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/cQ2Bb9ZudvJZUA0TjgzVYUOHfgrkYpa8",
      chainId: 1,
      accounts: [
        "0x_WALLET_PRIVATE_KEY",
      ],
    },
  },
};
