
async function main() {
    const P2PTransaction = await ethers.getContractFactory("P2PTransaction");
    const p2pTransaction = await P2PTransaction.deploy();
  
    await p2pTransaction.deployed();
  
    console.log("P2PTransaction deployed to:", p2pTransaction.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });