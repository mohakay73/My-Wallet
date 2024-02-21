import { ethers } from './ethers.min.js';
import { provider } from './app.js';
function initApp() {}

const CheckBlocks = document.querySelector('#blocks');
const transactionList = document.querySelector('#transactions');

async function checkBlocks() {
  const block = await provider.getBlock('latest');

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
    let trx = await provider.getTransaction(hash);
    createTransactionList(trx);
  }
}
document.addEventListener('DOMContentLoaded', initApp);
CheckBlocks.addEventListener('click', checkBlocks);
