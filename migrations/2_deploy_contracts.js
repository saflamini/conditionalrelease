const ConditionalRelease = artifacts.require("ConditionalRelease");


module.exports = async function(deployer, network, accounts) {

    await deployer.deploy(ConditionalRelease)
    const conditionalRelease = await ConditionalRelease.deployed();

    // conditionalRelease.lockEth(10000, { from: "0x843C1737aB58402492E6624C03F40cB31e63bA81"})
};