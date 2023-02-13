
require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/FwYk1_nD2w3VU_9lyVe4WkYIDW1syffu',
      accounts: ['c26d9b21f24ad9e33767bc5eba438144e8aa483b2de5a019d65bce6ed474b112']
    }
  }
}