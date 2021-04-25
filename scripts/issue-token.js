const TokenFarm = artifacts.require("TokenFarm");


module.exports = async function(callback) {

    //code goes here - this seems like it's some kind of unit test or something?
    //looks like a script that is designed to specifically deploy the issueTokens() function within our TokenFarm contract
    let tokenFarm = await TokenFarm.deployed()
    await tokenFarm.issueTokens()

    console.log('tokens issued boi')
    callback()
};