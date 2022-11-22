import { ethers } from "ethers";


export const UNISWAP_ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

export const WSS_URL = process.env.WSS_URL!;
export const walletAddress = ethers.utils.getAddress(process.env.WALLET_ADDRESS!)