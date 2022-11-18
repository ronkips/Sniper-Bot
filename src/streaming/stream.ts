import {
  getTransactionHash,
  interfaceABI,
  _wssProvider
} from "../common/common";
import { UNISWAP_ROUTER } from "../config/config";

export const streamData = async () => {
  try {
    _wssProvider.on("pending", async (txHash) => {
      const receipt = await getTransactionHash(txHash);

      //   console.log("TX DATA", receipt);

      if (receipt) {
        const { to: router, hash: txHash } = receipt;

        if (router?.toLowerCase() == UNISWAP_ROUTER.toLowerCase()) {
          //decode the data

          const decodedData = interfaceABI.parseTransaction({
            data: receipt.data
          });

          let methodName = decodedData.name;
          let path = decodedData.args.path;
          let token = path[path.length - 1];

          console.info({
            methodName,
            path,
            token,
            txHash
          });
            
            
            //execution logic
            //filter for addLiquidity, addLiquidityETH
        }
      }
    });
  } catch (error) {
    console.log("Error streaming data", error);
  }
};
