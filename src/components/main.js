//goal - make the loader in app.js work...once content is loaded, we want to load content

import React, { Component } from 'react'
import dai from '../dai.png'


class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">

                <table className="table table-borderless text-muted text-center">
                    <thead>
                        <tr>
                            <th scope="col">Staking Balance</th>
                            <th scope="col">Reward Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
                            <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
                        </tr>
                    </tbody>
                </table>
                
            <div className='card mb-4'>
                <div className="card-body">

                    <form className="mb-3" onSubmit={(event) => {
                        event.preventDefault()
                        let amount
                        amount = this.input1.value.toString()
                        amount = window.web3.utils.toWei(amount, 'Ether')
                        this.props.stakeTokens(amount)
                    }}>
                        <div>
                            <label className='float-left'><b>Stake Tokens</b></label>
                            <span className='float-right text-muted'>
                                Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                            </span>
                        </div>
                        <div className="input-group mb-4">
                            <input
                                type="text"
                                ref={(input1) => { this.input1 = input1 }}
                                className="form-control form-control-lg"
                                placeholder='0'
                                required />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <img src={dai} height='32' alt=""/>
                                    &nbsp;&nbsp;&nbsp; mDAI
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE</button>
                       
                    </form>

                    <form className="mb-3" onSubmit={(event) => {
                                event.preventDefault()
                                let withdrawAmount
                                withdrawAmount = this.input.value.toString()
                                withdrawAmount = window.web3.utils.toWei(withdrawAmount, 'Ether')
                                this.props.withdrawTokens(withdrawAmount)
                    }}>
                        <label className='float-left'><b>Unstake Tokens</b></label>
                        <div className="input-group mb-4">
                            <input
                                type="text"
                                ref={(input) => { this.input = input }}
                                className="form-control form-control-lg"
                                placeholder='Enter amount to withdraw...'
                                required />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <img src={dai} height='32' alt=""/>
                                    &nbsp;&nbsp;&nbsp; mDAI
                                </div>
                            </div>
                        </div>
                    <button type="submit" className="btn btn-secondary btn-block btn-lg">WITHDRAW</button>
                    </form>
                </div>

            </div>

            </div>
        );
        }
    }

    export default Main;