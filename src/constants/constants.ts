export const presaleAddress =
  process.env.NODE_ENV === 'development'
    ? process.env.PRESALE_ADDRESS_GOERLI
    : process.env.PRESALE_ADDRESS
export const tokenAddress =
  process.env.NODE_ENV === 'development'
    ? process.env.TOKEN_ADDRESS_GOERLI
    : process.env.TOKEN_ADDRESS
export const wethAddress =
  process.env.NODE_ENV === 'development'
    ? process.env.WETH_ADDRESS_GOERLI
    : process.env.WETH_ADDRESS
export const usdtAddress =
  process.env.NODE_ENV === 'development'
    ? process.env.USDT_ADDRESS_GOERLI
    : process.env.USDT_ADDRESS
export const usdcAddress =
  process.env.NODE_ENV === 'development'
    ? process.env.USDC_ADDRESS_GOERLI
    : process.env.USDC_ADDRESS
