'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Web3Button } from '../components/Web3Button'
import LOGO from '../assets/images/logo.svg'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Lottie from 'react-lottie-player'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import lottie from '../constants/coin.json'
import { useAccount } from 'wagmi'

function LinearProgressWithLabel(props: any) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          sx={{ height: '15px', borderRadius: '30px', background: '#0073ff3b' }}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  )
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
}

export default function Home() {
  const { address } = useAccount()

  const [quantity, setQuantity] = useState<number>(0)

  return (
    <section className="main">
      <div className="main-content">
        <div className="containerr onboard">
          <div className="part">
            {!address ? (
              <Image
                src={LOGO}
                width={300}
                height={300}
                className="logo-before-connect"
                alt="LOGO"
              />
            ) : null}
            <Web3Button />

            {address ? (
              <div className="minting">
                <>
                  <h1 className="tokensowned">You own 0 tokens.</h1>
                  <h2 className="wallet">Connected wallet</h2>
                  <h3 className="wallet-address">{address}</h3>
                  <div className="cost">
                    <h2>1 TOKEN = USDC</h2>
                  </div>
                </>

                <div>
                  <div className="quantitymint">
                    <h2>Quantity</h2>
                    <input
                      type="number"
                      id="quantity"
                      min={1}
                      max={2}
                      step="1"
                      value={quantity}
                      onChange={e => setQuantity(Number(e.target.value))}
                    />
                  </div>

                  <div className="mintbuttons">
                    <button className="mintbutton">APPROVE USDC</button>
                    <button className="mintbutton">APPROVE WETH</button>
                    <button className="mintbutton" disabled={false}>
                      Buy with USDC
                    </button>
                    <button className="mintbutton" disabled={false}>
                      Buy with WETH
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="line"></div>
          <div className="lottie part">
            <Lottie className="lottie" loop animationData={lottie} play />
            <div className="progress">
              <h3 className="minted">
                Tokens Sold: &nbsp;
                {Number(20000000).toLocaleString('en-US')} /{' '}
                {Number(20000000).toLocaleString('en-US')} (
                {Math.round(100) + '%'})
              </h3>
              <Box sx={{ width: '100%', height: '60px' }}>
                <LinearProgressWithLabel value={100} />
              </Box>
            </div>
          </div>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <div className="main-content">
        <div className="containerr presale">
          <h2>Presale Phases</h2>
          <h3>Total Supply: 50,000,000 tokens</h3>
          <h3>Total Presale: 20,000,000 tokens</h3>
          <h3>Listing Price: $0.055</h3>
          <div className="stages">
            <div className="stage">
              <h4>Phase 0:</h4>
              <p>
                Minimum buy: 3,000 tokens <br />
                Maximum buy: 25,000 tokens <br />
                6,000,000 tokens, price $0.040
              </p>
            </div>
            <div className="stage">
              <h4>Phase 1:</h4>
              <p>
                Minimum buy: 3,000 tokens <br />
                Maximum buy: 5,000 tokens <br />
                3,500,000 tokens, price $0.044
              </p>
            </div>
            <div className="stage">
              <h4>Phase 2:</h4>
              <p>
                Minimum buy: 2,000 tokens <br />
                Maximum buy: 75,000 tokens <br />
                3,500,000 tokens, price $0.046
              </p>
            </div>
            <div className="stage">
              <h4>Phase 3:</h4>
              <p>
                Minimum buy: 2,000 tokens <br />
                Maximum buy: 75,000 tokens <br />
                3,500,000 tokens, price $0.048
              </p>
            </div>
            <div className="stage">
              <h4>Phase 4:</h4>
              <p>
                Minimum buy: 1,000 tokens <br />
                Maximum buy: 100,000 tokens <br />
                3,500,000 tokens, price $0.050
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
