import { ethers } from "ethers";
import { WSS_URL } from "../config/config";
import { UNISWAP_ABI } from "../constants/uniswap";

export const _wssProvider = new ethers.providers.WebSocketProvider(WSS_URL);

export const interfaceABI = new ethers.utils.Interface(UNISWAP_ABI);

export const getTransactionHash = async (txHash: string) => {
  try {
    return _wssProvider.getTransaction(txHash);
  } catch (error) {
    console.log("error getting the txHash", error);
  }
};
