import { BigNumber } from "ethers";
import  dotenv from "dotenv";

// dotenv.config({ path: __dirname + "/../../.env" });


export interface txContents {
  hash: string;
  from: string;
  to: any;
  maxPriorityFeePerGas?: any;
  maxFeePerGas?: any;
  gasPrice?: BigNumber;
  gas: BigNumber;
  data: string;
}
