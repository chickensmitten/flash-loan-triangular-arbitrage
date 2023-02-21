# Flash Loan
## Intro
- To read data from contract:
  - Install relevant JS modules like EtherJS
  - Setup the `provider`. The provider can be any BSC JSON RPC. the JsonRpcProvider used in this tutorial is `"https://bsc-dataseed.binance.org/"` 
  - Get relevant contract addresses:
    - addressFactory. Pancake Swap Factory address enables the right pricing contract etc to find the right pairs. Refer to [this](https://docs.pancakeswap.finance/code/smart-contracts/pancakeswap-exchange/v2/factory-v2). Tutorial requires it, but the code is effectively unused.
    - addressRouter. Pancake Swap Router address provides the prices. Refer to [this](https://docs.pancakeswap.finance/code/smart-contracts/pancakeswap-exchange/v2/router-v2) 
    - addressFrom. Is the address of a token like BUSD
    - addressTo. Is the address of another token like WBNB
  - Get ABI Variables i.e. `"function getPair(address tokenA, address tokenB) external view returns (address pair)",`
  - In the contract Router, put amount in then get amount out. Parse them to ensure human readible decimals.
  - Then run code `node public/pancake/client/GetPrices.js` to get results

- For more information:
  - Refer to `/public/pancake` for code on how to read PancakeSwap v2.
  - Refer to `/public/uniswapv2` for code on how to read Uniswap v2.
  - Refer to `/public/uniswapv3` for code on how to read Uniswap v3.

## Setup
- run code below to install
```
npm ci // use this instead of npm install
npx hardhat test
```
- You will likely see a "Arbitrage not profitable" error come up, if the arbitrage is not profitable. This is the most common result and in fact means the code is working.
