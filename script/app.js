import { ethers } from './ethers.min.js';
export const provider = new ethers.providers.JsonRpcProvider(
  'HTTP://127.0.0.1:7545'
);
