import { ethers } from './ethers.min.js';

function initApp() {}

const CheckBlocks = document.querySelector('#blocks');
const transactionList = document.querySelector('#transactions');
const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

async function checkBlocks() {
  const block = await provider.getBlock('latest');
  console.log('Latest block:', block);

  if (block === null) returns;

  const transactions = block.transactions;

  if (transactions != null) {
    displayHistory(transactions);
  }
}

function createTransactionList(transaction) {
  transactionList.innerHTML += `
  
    <span>${transaction.from}</span>
    <span>${transaction.to}</span>
    <span>${ethers.utils.formatEther(transaction.value)} ETH</span>`;
}

async function displayHistory(transactions) {
  transactionList.innerhtml = '';
  for (let hash of transactions) {
    //Get transaction by its hash
    let trx = await provider.getTransaction(hash);
    console.log(trx);
    createTransactionList(trx);
  }
}
document.addEventListener('DOMContentLoaded', initApp);
CheckBlocks.addEventListener('click', checkBlocks);
