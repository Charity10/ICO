const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNftContract  = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevsTokenContract = await ethers.getContractFactory (
    "CryptoDevToken"
  );

  const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy (
    cryptoDevsNftContract
  );

  console.log (
    "crpto Dev Token Contract Address:", 
    deployedCryptoDevsTokenContract.address
  );
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});