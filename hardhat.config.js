require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};

// require("@nomiclabs/hardhat-waffle");

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {},
//     rinkeby: {
//       url: process.env.RINKEBY_URL || "",
//       accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
//     },
//   },
// };
