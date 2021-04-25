const ConditionalRelease = artifacts.require("ConditionalRelease");


require("chai")
    .use(require("chai-as-promised"))
    .should()

function tokens(n) {
    return web3.utils.toWei(n, 'ether');
}



contract('ConditionalRelease', ([owner]) => {
    let conditionalRelease
    //load the contracts
    before(async () => {
        conditionalRelease = await ConditionalRelease.new();
    })

    //write tests

    //basically, need to figure out how to include msg.sender and msg.value in these tests
    describe('test initial balance', async () => {
        it('has an initial lockedBalance of 0', async () => {
            let balance = await conditionalRelease.lockedBalance(owner)
            assert.equal(balance.toString(), '0', 'initial locked balance should be zero')
        })
    })

        //how can I test whether or not my smart contract function WORKS to modify smart contract state?
    describe('funds are locked', async () => {
        it('locks my funds', async () => {
            let balance = conditionalRelease.lockedBalance(owner)
            let contract = new web3.eth.Contract(ConditionalRelease.abi, ConditionalRelease.address)
            await contract.methods.lockEth().send({from: owner.address}, '10000')
            assert.equal(balance.toString(), '100000', "funds are properly locked")
        })
    })
    
    // describe("funds are released", async () => {
    //     it('releases my funds', async () => {
    //         result = await conditionalRelease.withdrawEth( {from: owner} )
    //         assert.equal(result.toString(), '0', 'funds are properly released')
    //     })
    // })

    // describe("Token Farm deployment", async () => {
    //     it('has a name', async () => {
    //         const name = await tokenFarm.name()
    //         assert.equal(name, 'Dapp token farm')
    //     })
    //     it('contract has tokens', async () => {
    //         let balance = await dappToken.balanceOf(tokenFarm.address)
    //         assert.equal(balance.toString(), tokens('1000000'))
    //     })
    // })

    // describe("Farming tokens", async () => {

    //     it("rewards stakers for staking mDai tokens", async () => {
    //         let result;
    //         //check investor balance prior to staking (should be 100)
    //         result = await daiToken.balanceOf(investor)
    //         assert.equal(result.toString(), tokens('100'), 'investor Mock Dai balance must be correct before staking')        
    //     //Stake mock dai tokens
    //     await daiToken.approve(tokenFarm.address, tokens('100'), { from: investor })
    //     await tokenFarm.stakeTokens(tokens('100'), { from: investor})

    //     //check staking result
    //     result = await daiToken.balanceOf(investor)
    //     assert.equal(result.toString(), tokens('0'), 'investor mock dai wallet balance must be correct after staking')

    //     result = await daiToken.balanceOf(tokenFarm.address)
    //     assert.equal(result.toString(), tokens('100'), 'token farm mock dai balance must be correct')

    //     result = await tokenFarm.stakingBalance(investor)
    //     assert.equal(result.toString(), tokens('100'), 'staking balance is correct')

    //     result = await tokenFarm.isStaking(investor)
    //     assert.equal(result.toString(), 'true', 'Investor staking status is correct after staking')

    //     //issue tokens
    //     await tokenFarm.issueTokens({ from: owner })

    //     result = await dappToken.balanceOf(investor)
    //     assert.equal(result.toString(), tokens('100'), 'investor dapp token walleet balance correct after issuance')

    //     //ensure that the owner is the only one who can call function
    //     await tokenFarm.issueTokens({ from: investor}).should.be.rejected;
        
    //     //withdraw 100 tokens
    //     await tokenFarm.withdrawTokens(tokens('100'),{ from: investor })
    //     result = await daiToken.balanceOf(investor)
    //     assert.equal(result.toString(), tokens('100'), 'investor mock dai wallet correct after staking')

    //     result = await daiToken.balanceOf(tokenFarm.address)
    //     assert.equal(result.toString(), tokens('0'), 'tokens withdrawn')

    //     result = await tokenFarm.stakingBalance(investor);
    //     assert.equal(result.toString(), tokens('0'), 'staking balance is zero after full withdraw')

    //     // result = await tokenFarm.isStaking(investor)
    //     // assert.equal(result.toString(), 'false', 'investor no longer staking after withdraw')
    // })
})
// })