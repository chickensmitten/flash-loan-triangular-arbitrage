const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
);

// CREATE SIGNER
const myAddress = "0xa20E4694480dF2100dd84a5df16FbA922770f741";
const privateKey = process.env.WALLET_PRIVATE_KEY;
const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
  const sendValueHuman = "0.05";
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 11; // web3.eth.getTransactionCount(myAddress)
  const txBuild = {
    from: myAddress, // from,
    to: "0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15", // to (WETH on Rinkeby Test Network),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);

  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

exchangeETH();
