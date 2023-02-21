# Flash Loan Triangular Arbitrage
- It is easier to use Alchemy, Hardhat and EtherJS for development.


## Intro

### Reading Smart Contract Data
- To read pancakseswap data in BSC from contract:
  - Install relevant JS modules like EtherJS with `npm init` and `npm install`
  - Setup the `provider`. The provider can be any BSC JSON RPC. the JsonRpcProvider used in this tutorial is `"https://bsc-dataseed.binance.org/"` 
  - Get relevant contract addresses:
    - addressFactory. Pancake Swap Factory address refers to the address of the facotry smart contracts that creates the token contract and liquidity pool. Refer to [this](https://docs.pancakeswap.finance/code/smart-contracts/pancakeswap-exchange/v2/factory-v2). Tutorial requires it, but the code is effectively unused.
    - addressRouter. Pancake Swap Router address provides the prices. Refer to [this](https://docs.pancakeswap.finance/code/smart-contracts/pancakeswap-exchange/v2/router-v2) 
    - addressFrom. Is the address of a token like BUSD
    - addressTo. Is the address of another token like WBNB
  - Get ABI Variables i.e. `"function getPair(address tokenA, address tokenB) external view returns (address pair)",`
  - In the contract Router, put amount in then get amount out. Parse them to ensure human readible decimals.
  - Then run code `node public/pancake/client/GetPrices.js` to get results
- Reading data from uniswapv2 is very similar to pancake
- To read uniswapV3 from contract:
  - `npm i --save-dev @uniswap/v3-sdk @uniswap/sdk-core`
  - Get provider JSON RPC
  - Get [quoter address](https://docs.uniswap.org/contracts/v3/reference/deployments)
  - Pull price information with `quoteExactInputSingle`
- For LiquidityPool details in uniswapV3, refer to `public/uniswapV3/client/pool.js` and `public/uniswapV3/client/factory.js`
- `getPool` basically returns the liquidity pool based on the token addresses and factory addresses.
- For more information:
  - Refer to `/public/pancake` for code on how to read PancakeSwap v2.
  - Refer to `/public/uniswapv2` for code on how to read Uniswap v2.
  - Refer to `/public/uniswapv3` for code on how to read Uniswap v3.

## Testing with Hardhat
- Hardhat is equivalent to Truffle
- Real value proposition is to allow for interaction with a fork of mainnet for testing
- `npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}` to launch a testnet
- `const [ownerSigner] = await ethers.getSigners();` gets a list of testnet accounts.
- `npx hardhat test` to run hardhat testing
- Refer to `/public/hardhatTest` for code for testing.
- Refer to `utils` and `test` folder and `sample-script.js`

## Setup
- run code below to install
```
npm ci // use this instead of npm install
npx hardhat test
```
- You will likely see a "Arbitrage not profitable" error come up, if the arbitrage is not profitable. This is the most common result and in fact means the code is working.
